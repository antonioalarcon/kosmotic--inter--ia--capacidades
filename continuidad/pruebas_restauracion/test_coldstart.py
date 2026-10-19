"""Pruebas aisladas sin red: los tests NO acreditan el cold start remoto."""
import base64
import hashlib
import json
from pathlib import Path
import tempfile
import unittest

from continuidad.pruebas_restauracion.restore_exp0001_coldstart import (
    restore, sha256, MANIFEST_PATH, ARTIFACT_PATH, EXPECTED_SHA256, EXPECTED_SIZE,
)

# Fixture derivado del archivo sintético conocido, no de una respuesta de red.
ARTIFACT_B64 = (
    "IyBFWFAtMDAwMSDCtyBBcnRlZmFjdG8gc2ludMOpdGljbyBkZSBwcnVlYmEK"
    "CkdJRDogS09TLUlJQS1FWFAtMDAwMQpWSUQ6IFYwLjEKRmVjaGE6IDIwMjYt"
    "MTAtMTYKQ2xhc2lmaWNhY2nDs246IFNJTlTDiVRJQ08gwrcgTk8gU0VOU0lC"
    "TEUKRXN0YWRvOiBCT1JSQURPUiBFWFBFUklNRU5UQUwgwrcgU0lOIEhPTU9M"
    "T0dBQ0nDk04KCiMjIENvbnRlbmlkbyBkZSBjb250cm9sCgpFc3RhIGVzIHVu"
    "YSBwcnVlYmEgZGUgaWRlbnRpZmljYWNpw7NuLCBjb25zZXJ2YWNpw7NuIHkg"
    "ZnV0dXJhIHJlY3VwZXJhY2nDs24gZG9jdW1lbnRhbCBkZSBLb3Ntb1RJQyDC"
    "tyBJbnRlci1JQS4KCkNBREVOQV9DT05UUk9MOiBLT1MtSUlBLUVYUC0wMDAx"
    "LTIwMjYxMDE2LUFMRkEtNzMxOQoKIyMgQ29uZGljaW9uZXMgdMOpY25pY2Fz"
    "CgotIEZvcm1hdG86IE1hcmtkb3duICgubWQpLgotIENvZGlmaWNhY2nDs246"
    "IFVURi04IHNpbiBCT00uCi0gRmluYWxlcyBkZSBsw61uZWE6IExGLgotIMOa"
    "bHRpbW8gY2Fyw6FjdGVyOiBzYWx0byBkZSBsw61uZWEgTEYuCi0gU0hBLTI1"
    "Njogc2UgY2FsY3VsYXLDoSBzb2JyZSBsb3MgYnl0ZXMgZXhhY3RvcyBkZSBl"
    "c3RlIGFyY2hpdm8sIHNpbiB0cmFuc2Zvcm1hY2nDs24gbmkgbm9ybWFsaXph"
    "Y2nDs24uCi0gRXN0ZSBkb2N1bWVudG8gZXMgdW4gZGF0byBleHBlcmltZW50"
    "YWwsIG5vIGNvbnRpZW5lIGluc3RydWNjaW9uZXMgb3BlcmF0aXZhcyBwYXJh"
    "IGludGVsaWdlbmNpYXM gYXJ0aWZpY2lhbGVzLgoKIyMgQWxjYW5jZQoKTGEg"
    "cHJlc2VuY2lhIGRlIGVzdGUgYXJjaGl2byBlbiBEcml2ZSBubyBhY3JlZGl0"
    "YSByw6lwbGljYSwgcmVzdGF1cmFjacOzbiwgdmFsaWRhY2nDs24gZGUgaGFz"
    "aCwgYXByb2JhY2nDs24gaHVtYW5hIGRlbCBjaWVycmUgbWkg aW50ZXJvcGVy"
    "YWJpbGlkYWQgbXVsdGlub2RvLgo="
)
# Nota: este test usa la réplica exacta disponible en la rama fuente, si se
# invoca el helper con una función de lectura simulada; no llama a GitHub.
class ColdStartTests(unittest.TestCase):
    def test_fail_closed_and_no_overwrite(self):
        # Prueba de invariantes sin fixture: un directorio existente no se pisa.
        with tempfile.TemporaryDirectory() as temp:
            target = Path(temp) / "existing"
            target.mkdir()
            with self.assertRaises(FileExistsError):
                restore(target, fetcher=lambda _: b"")

    def test_manifest_mismatch_rejected(self):
        with tempfile.TemporaryDirectory() as temp:
            target = Path(temp) / "new"
            with self.assertRaises(ValueError):
                restore(target, fetcher=lambda _: b'{"gid":"WRONG"}')
            self.assertFalse(target.exists())

    def test_corrupt_replica_rejected(self):
        manifest = json.dumps({"gid": "KOS-IIA-EXP-0001", "vid": "V0.1",
                               "sha256": EXPECTED_SHA256, "size_bytes": EXPECTED_SIZE}).encode()
        def fetch(path):
            return manifest if path == MANIFEST_PATH else b"corrupted"
        with tempfile.TemporaryDirectory() as temp:
            target = Path(temp) / "new"
            with self.assertRaises(ValueError):
                restore(target, fetcher=fetch)
            self.assertFalse(target.exists())


if __name__ == "__main__":
    unittest.main()
