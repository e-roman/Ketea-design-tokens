# Changelog

## 2.1.0 (2026-11-06)

**Nuevo: movimiento**

- `duration.{fast,base,slow,slower}`: 150, 300, 500 y 1000 ms. Variables `--duration-*`.
- `easing.{standard,out}`: `cubic-bezier(0.4, 0, 0.2, 1)` y `cubic-bezier(0, 0, 0.2, 1)`. Variables `--easing-*`.
- Mismos nombres y valores que el sistema de Orali, para que ambos compartan la escala de movimiento.
- Pendiente: cargarlos también en Figma (variables de Tokens Studio) para que la fuente siga siendo una sola.

## 2.0.1 (2026-11-06)

- Corrige el campo `version` de `package.json`, que en 2.0.0 todavía decía 1.1.0. No hay cambios en los tokens.

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
