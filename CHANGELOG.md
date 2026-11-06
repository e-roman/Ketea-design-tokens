# Changelog

## 3.0.0 (2026-11-06)

**Breaking: paleta resumida**

La paleta tenía 14 rampas de 11 pasos (156 primitivos) y la mayoría no cumplía ninguna función en el sistema: venían del tema Bootstrap original. Ahora queda una paleta con lógica, de 48 primitivos:

- **Se mantienen completas** (50–950): `Neutral` (grises) y `Blue-brand` (marca).
- **Rampas de estado con 6 pasos** (50, 100, 300, 500, 700, 900): `Green` (éxito), `Red` (error), `Yellow` (advertencia) y `Blue` (info).
- `White` y `Black`.
- **Se eliminan:** las rampas `Slate`, `Rose`, `Pink`, `Purple`, `Violet`, `Indigo`, `Sky` y `Orange`, y los pasos 200, 400, 600, 800 y 950 de `Green`, `Yellow`, `Red` y `Blue`.
- Los alias de marca y los tokens semánticos no cambian: ninguno usaba lo eliminado.
- Migración: cada variable eliminada se reemplaza por la más cercana de la paleta nueva. Slate pasa a Neutral; Rose y Pink, a Red; Orange, a Yellow; Indigo, Violet y Purple, a Blue-brand; Sky, a Blue.
- Pendiente: reflejar el cambio en Figma (variables de Tokens Studio).

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
