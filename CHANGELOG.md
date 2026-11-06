# Changelog

## 2.0.0 (2026-11-06)

**Breaking**

- Se elimina el prefijo `ketea` de los nombres de los tokens. Las variables CSS pasan de `--ketea-color-brand-700` a `--color-brand-700`; lo mismo en los canales `-rgb` y en las referencias `var()` del preset de Tailwind. Los nombres de las utilidades de Tailwind no cambian.
- Los nombres del módulo `tokens.js` no cambian (nunca llevaron prefijo).
- Migración: en el código que usa los tokens, reemplazar `--ketea-` por `--`.
- El paquete sigue siendo `@ketea/tokens`.

## 1.1.0 (2026-10-06)

- Pipeline reconstruido sobre Style Dictionary 4 (se elimina la configuración de Style Dictionary 3).
- Salidas en `dist/`: `tokens.css` (variables `--ketea-*` con referencias y canales RGB), `tokens.js` y `tailwind-tokens.js`.
- README actualizado.

## 1.0.0 (2026-09-22)

- Primera versión: tokens de color, spacing, radius, shadow, tipografía, border, opacity y size, exportados desde Tokens Studio.
