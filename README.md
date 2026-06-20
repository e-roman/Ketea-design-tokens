# @ketea/tokens

Design tokens del sistema de diseño **Ketea S.A.** — ecommerce de equipamiento para piletas.

Generados desde Figma vía [Tokens Studio](https://tokens.studio/) y transformados con [Style Dictionary](https://amzn.github.io/style-dictionary/).

---

## Instalación

```bash
npm install @ketea/tokens
# o
yarn add @ketea/tokens
```

---

## Uso

### CSS Variables

```css
/* En tu entry point (index.css / globals.css) */
@import '@ketea/tokens/dist/tokens.css';

/* Uso en componentes */
.button-primary {
  background-color: var(--color-brand-700);
  color: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--spacing-3) var(--spacing-6);
}
```

### JavaScript / TypeScript

```js
import tokens from '@ketea/tokens/dist/tokens.js';

const brandColor = tokens.color.brand[700]; // '#385DBE'
const spacingMd  = tokens.spacing[4];       // '16px'
```

### Tailwind CSS

```js
// tailwind.config.js
const keteaTokens = require('@ketea/tokens/dist/tailwind-tokens');

module.exports = {
  theme: {
    extend: {
      ...keteaTokens,
    },
  },
};

// Uso en JSX
// <button className="bg-brand-700 text-white rounded-md px-6 py-3">
```

---

## Estructura de tokens

| Grupo | Variables | Descripción |
|---|---|---|
| `color/*` | 212 | Paleta primitiva (Neutral, Blue-brand, Brand, Semantic, etc.) |
| `color/Semantic/*` | 42 | Tokens semánticos (surface, text, border, icon, feedback, forms) |
| `color/Brand/*` | 14 | Brand scale + Default / Hover / Subtle |
| `spacing/*` | 17 | Sistema de espaciado (4px base) |
| `radius/*` | 8 | Border radius (none → full) |
| `border/*` | 4 | Border widths (sm / md / lg / focus) |
| `opacity/*` | 3 | disabled / overlay / hover |
| `size/*` | 8 | Sizing (icons, touch targets, containers) |
| `font/*` | 30 | Family / weight / size / lineHeight |
| `breakpoint/*` | 3 | sm / md / lg / xl |
| `grid/*` | 9 | Columnas y gutters por breakpoint |
| `z/*` | 8 | Z-index scale |

**Total: 305 variables en colección `global`.**

---

## Tokens semánticos — referencia rápida

| Token | CSS Variable | Tailwind class | Valor resuelto |
|---|---|---|---|
| `Semantic/surface-page` | `--color-semantic-surface-page` | `bg-surface-page` | `#FAFAFA` |
| `Semantic/surface-default` | `--color-semantic-surface-default` | `bg-surface-default` | `#FFFFFF` |
| `Semantic/text-primary` | `--color-semantic-text-primary` | `text-text-primary` | `#171717` |
| `Semantic/text-secondary` | `--color-semantic-text-secondary` | `text-text-secondary` | `#525252` |
| `Semantic/text-link` | `--color-semantic-text-link` | `text-text-link` | `#385DBE` |
| `Semantic/border-focus` | `--color-semantic-border-focus` | `border-border-focus` | `#385DBE` |
| `Semantic/feedback-error-text` | `--color-semantic-feedback-error-text` | `text-feedback-error-text` | `#B91C1C` |
| `Brand/Default` | `--color-brand-default` | `bg-brand-default` | `#385DBE` |
| `Brand/Hover` | `--color-brand-hover` | `bg-brand-hover` | `#2A4A9E` |

---

## Sombras — Effect Styles

> **Nota de arquitectura:** Los tokens de sombra (`shadow/xs` → `shadow/focus`) están definidos en el JSON de tokens y en el `tailwind.config.js`, pero en Figma viven como **Effect Styles** (no como Variables). Esto es una decisión deliberada: Figma no soporta nativamente el tipo `boxShadow` en Variables locales (solo `color`, `number`, `string`, y `boolean`). En el momento en que Figma lo soporte de forma nativa, la migración consiste en convertir los Effect Styles existentes a Variables y re-bindear los componentes.

**Los valores están disponibles en código** desde ya:

```css
/* CSS Variables generadas por Style Dictionary */
--shadow-xs:    0 1px 2px 0 rgba(0,0,0,0.05);
--shadow-sm:    0 1px 3px 0 rgba(0,0,0,0.08);
--shadow-md:    0 4px 6px -1px rgba(0,0,0,0.10);
--shadow-lg:    0 10px 15px -3px rgba(0,0,0,0.10);
--shadow-xl:    0 20px 25px -5px rgba(0,0,0,0.12);
--shadow-focus: 0 0 0 3px #CDDAF5;
```

```js
// Tailwind
// shadow-sm, shadow-md, shadow-lg, shadow-xl
// shadow-focus → usado en :focus-visible de todos los componentes interactivos
```

**En Figma:** abrí el panel de Assets → Effect Styles → grupo **Shadow** para aplicar a componentes.

---

## Focus ring

El sistema usa un focus ring de `3px` con color `Blue-brand/200` (`#CDDAF5`) — derivado de la paleta primaria de Ketea.

```css
/* Aplicación estándar en componentes interactivos */
:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus);
  border-color: var(--color-brand-default);
}
```

En Figma están documentados como Effect Styles bajo **Focus ring** → `4px primary-100`, `4px error-100`, `4px primary-600`.

---

## Pipeline de actualización

```
Figma Variables (Tokens Studio)
        ↓  push automático
GitHub repo (ketea-design-tokens)
        ↓  GitHub Action
Style Dictionary → dist/tokens.css · tokens.js · tailwind-tokens.js
        ↓  CI/CD
NPM @ketea/tokens@x.x.x
        ↓  npm update
App en producción — el cambio aplica sin tocar código
```

---

## Changelog

### v1.0.0 — 2026-06
- Colección inicial: 305 variables en colección `global`
- Brand color establecido en `#385DBE` (Blue-brand/700) — paleta propia de Ketea
- Tipografía: **Mulish** para sans y display, JetBrains Mono para código
- Shadows y focus rings definidos como Effect Styles (pendiente migración a Variables cuando Figma soporte `boxShadow` nativo)
- Semantic tokens completos: surface, text, border, icon, feedback (4 estados), forms
- Limpieza de variables duplicadas — colección unificada bajo prefijo `color/`

---

## Contribución

Los tokens se editan **únicamente desde Figma** vía Tokens Studio. No editar el JSON a mano.

1. Abrí el plugin Tokens Studio en Figma
2. Realizá los cambios en Variables o en el panel de Tokens Studio
3. Push al repo desde el plugin (Settings → Sync → GitHub)
4. La GitHub Action corre Style Dictionary automáticamente
5. Revisá el PR generado y mergeá
