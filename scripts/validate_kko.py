#!/usr/bin/env python3
"""Valida los metadatos YAML de los KKO Markdown contra JSON Schema 2020-12."""

import json
import sys
from pathlib import Path

import yaml
from jsonschema import Draft202012Validator, FormatChecker

ROOT = Path(__file__).resolve().parents[1]
SCHEMA = ROOT / "schemas" / "kko.schema.json"
FILES = sorted((ROOT / "knowledge").rglob("KKO-*.md"))


def read_frontmatter(path: Path) -> dict:
    text = path.read_text(encoding="utf-8-sig")
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        raise ValueError("falta apertura de frontmatter YAML (---)")
    try:
        end = next(i for i, line in enumerate(lines[1:], 1) if line.strip() == "---")
    except StopIteration as exc:
        raise ValueError("falta cierre de frontmatter YAML (---)") from exc
    metadata = yaml.safe_load("\n".join(lines[1:end]))
    if not isinstance(metadata, dict):
        raise ValueError("el frontmatter debe ser un objeto YAML")
    return metadata


def main() -> int:
    if not FILES:
        print("ERROR: no se encontraron KKO en knowledge/**/KKO-*.md", file=sys.stderr)
        return 1
    schema = json.loads(SCHEMA.read_text(encoding="utf-8"))
    Draft202012Validator.check_schema(schema)
    validator = Draft202012Validator(schema, format_checker=FormatChecker())
    failures = 0
    seen_ids = set()
    for path in FILES:
        name = path.relative_to(ROOT)
        try:
            metadata = read_frontmatter(path)
            errors = sorted(validator.iter_errors(metadata), key=lambda e: str(e.path))
            if metadata.get("id") != path.stem:
                errors.append(ValueError("id no coincide con el nombre del archivo"))
            if metadata.get("id") in seen_ids:
                errors.append(ValueError("id duplicado"))
            seen_ids.add(metadata.get("id"))
            if errors:
                failures += 1
                for error in errors:
                    print(f"ERROR {name}: {error.message if hasattr(error, 'message') else error}", file=sys.stderr)
            else:
                print(f"OK {name}")
        except (OSError, ValueError, yaml.YAMLError) as exc:
            failures += 1
            print(f"ERROR {name}: {exc}", file=sys.stderr)
    print(f"KKO revisados: {len(FILES)} · archivos con errores: {failures}")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
