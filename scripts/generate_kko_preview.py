#!/usr/bin/env python3
"""Genera una vista de consulta temporal desde un KKO. Nunca publica ni modifica docs/."""

import argparse
import json
import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_KKO = "knowledge/agentes/KKO-IA-AGENTES-001.md"
DEFAULT_OUTPUT = "dist/preview/kosmowiki/agentes-ia.md"
SECTIONS = (
    ("Definición", "Qué es"),
    ("Explicación para cualquier persona", "En palabras sencillas"),
    ("Funcionamiento básico", "Cómo funciona"),
    ("Límites y riesgos", "Límites y riesgos"),
    ("Relación con KosmoTIC", "Gobernanza y relaciones"),
    ("Fuentes de referencia", "Fuentes"),
)


def load_kko(path, allow_draft=False, allow_review=False):
    raw = path.read_text(encoding="utf-8-sig")
    match = re.match(r"\A---\s*\n(.*?)\n---\s*\n", raw, re.S)
    if not match:
        raise ValueError("El KKO no tiene frontmatter YAML válido")
    meta = yaml.safe_load(match.group(1))
    if not isinstance(meta, dict) or not all(meta.get(k) for k in ("id", "version", "title")):
        raise ValueError("Faltan id, version o title en el KKO")
    status = meta.get("status")
    allowed = (
        status == "validated"
        or (allow_draft and status == "draft")
        or (allow_review and status == "review")
    )
    if not allowed:
        raise ValueError(
            "Vista temporal bloqueada: use un KKO validated, "
            "--allow-draft para draft o --allow-review para review"
        )
    body = raw[match.end():]
    headers = list(re.finditer(r"(?m)^## (.+?)\s*$", body))
    sections = {}
    for i, header in enumerate(headers):
        end = headers[i + 1].start() if i + 1 < len(headers) else len(body)
        sections[header.group(1).strip()] = body[header.end():end].strip()
    missing = [name for name, _ in SECTIONS if not sections.get(name)]
    if missing:
        raise ValueError("Faltan secciones canónicas: " + ", ".join(missing))
    return meta, sections


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--kko", default=DEFAULT_KKO, help="Ruta del KKO dentro de knowledge/")
    parser.add_argument("--output", default=DEFAULT_OUTPUT, help="Salida temporal dentro de dist/preview/")
    parser.add_argument("--allow-draft", action="store_true", help="Permitir KKO en draft solo para una vista temporal de revisión")
    parser.add_argument("--allow-review", action="store_true", help="Permitir KKO en review solo para una vista temporal; no autoriza publicación")
    args = parser.parse_args()
    source_path = ROOT / args.kko
    target_path = ROOT / args.output
    knowledge_root = ROOT / "knowledge"
    preview_root = ROOT / "dist/preview"
    # No aceptar raices redirigidas por enlaces simbolicos.
    if knowledge_root.resolve() != knowledge_root:
        parser.error("knowledge/ no puede estar redirigido por enlaces simbolicos")
    if preview_root.resolve() != preview_root:
        parser.error("dist/preview/ no puede estar redirigido por enlaces simbolicos")
    # Rechazar enlaces en la ruta de salida antes de crear o sobrescribir nada.
    if any(path.is_symlink() for path in (target_path, *target_path.parents)):
        parser.error("La ruta de salida no puede contener enlaces simbolicos")
    source = source_path.resolve()
    target = target_path.resolve()
    if not source.is_relative_to(knowledge_root) or not source.is_file():
        parser.error("El KKO debe ser un archivo dentro de knowledge/")
    if not target.is_relative_to(preview_root) or target == preview_root:
        parser.error("La salida debe permanecer en dist/preview/; nunca en docs/ o web/")
    if target.exists():
        if not target.is_file():
            parser.error("La salida existente debe ser un archivo regular")
        if target.samefile(source) or target.stat().st_nlink > 1:
            parser.error("La salida no puede compartir archivo con otra ruta")
    meta, sections = load_kko(
        source, allow_draft=args.allow_draft, allow_review=args.allow_review
    )
    rel_source = source.relative_to(ROOT).as_posix()
    parts = [
        "---",
        f"id: {json.dumps('KOS-PREVIEW-' + str(meta['id']), ensure_ascii=False)}",
        f"source_kko: {json.dumps(str(meta['id']), ensure_ascii=False)}",
        f"source_version: {json.dumps(str(meta['version']))}",
        f"source_path: {json.dumps(rel_source)}",
        "representation: kosmowiki",
        "status: draft",
        "generated: true",
        "human_review_required: true",
        "publication_approved: false",
        "---",
        "",
        f"# {meta['title']} · vista KosmoWiki (borrador)",
        "",
        "> Vista generada automáticamente para revisión humana. No es una publicación aprobada ni sustituye al KKO canónico.",
    ]
    for canonical, heading in SECTIONS:
        parts.extend(["", f"## {heading}", "", sections[canonical]])
    parts.extend(["", f"**Fuente canónica:** `{rel_source}` · versión `{meta['version']}`.", ""])
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text("\n".join(parts), encoding="utf-8")
    print(f"OK: {source.relative_to(ROOT)} -> {target.relative_to(ROOT)} (solo borrador)")


if __name__ == "__main__":
    main()
