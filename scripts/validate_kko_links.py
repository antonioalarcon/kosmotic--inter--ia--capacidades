#!/usr/bin/env python3
"""Comprueba enlaces Markdown locales y relaciones KKO ↔ derivados; no accede a Internet."""

import re
import sys
from pathlib import Path

from validate_kko import ROOT, read_frontmatter

LINK = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")
DERIVED_DIRS = ("docs/libro", "docs/academia", "docs/kosmowiki")


def local_targets(path: Path):
    text = path.read_text(encoding="utf-8-sig")
    for target in LINK.findall(text):
        target = target.split("#", 1)[0].strip()
        if not target or target.startswith(("http://", "https://", "mailto:", "/")):
            continue
        yield (path.parent / target).resolve()


def main() -> int:
    kkos = {p.stem: p for p in (ROOT / "knowledge").rglob("KKO-*.md")}
    derivatives = [p for d in DERIVED_DIRS for p in (ROOT / d).rglob("*.md")]
    errors = []
    checked = 0

    for path in [*kkos.values(), *derivatives]:
        relative = path.relative_to(ROOT)
        for target in local_targets(path):
            checked += 1
            if not target.is_relative_to(ROOT) or not target.is_file():
                errors.append(f"{relative}: enlace local inexistente o fuera del repositorio: {target}")

    for path in derivatives:
        relative = path.relative_to(ROOT)
        try:
            meta = read_frontmatter(path)
            source = meta.get("source_kko")
            if not source:
                continue  # Otros documentos no son derivados KKO.
            kko = kkos.get(source)
            if kko is None:
                errors.append(f"{relative}: source_kko inexistente: {source}")
                continue
            kko_meta = read_frontmatter(kko)
            if not meta.get("source_version"):
                errors.append(f"{relative}: falta source_version")
            if kko.resolve() not in set(local_targets(path)):
                errors.append(f"{relative}: falta enlace a su KKO")
            if path.resolve() not in set(local_targets(kko)):
                errors.append(f"{relative}: falta enlace inverso desde {source}")
            if meta.get("status") == "published" and not kko_meta.get("publication_approved"):
                errors.append(f"{relative}: KKO sin autorización de publicación")
        except (OSError, ValueError) as exc:
            errors.append(f"{relative}: {exc}")

    for error in errors:
        print(f"ERROR {error}", file=sys.stderr)
    print(f"KKO: {len(kkos)} · archivos derivados revisados: {len(derivatives)} · enlaces locales: {checked} · errores: {len(errors)}")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())
