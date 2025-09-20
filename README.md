# Parliament design system playground

An experimental Vite + Storybook workspace for exploring the UK Parliament design system in a local environment. It ships with reusable React components, Storybook stories and a sample page layout that emulate the design system tokens so you can iterate quickly.

> **Heads up**
> The designsystem.parliament.uk domain blocks traffic from this execution environment. The colour palette and typography bundled here are placeholders that mirror the public guidance and can be swapped for the canonical packages inside your network.

## Getting started

```bash
npm install
npm run dev     # starts the Vite dev server on http://localhost:5173
npm run storybook  # launches the Storybook playground on http://localhost:6006
```

## Project structure

```
├── src/
│   ├── design-system/
│   │   ├── components/      # React implementations of navigation, hero, card, tag, notice & button
│   │   ├── global.css       # CSS variables wired to the temporary token values
│   │   └── tokens.ts        # Source of truth for colours, spacing, typography and shadows
│   ├── stories/             # Storybook stories and docs powered by the shared tokens
│   └── App.tsx              # A page layout demonstrating how components compose together
├── .storybook/              # Storybook configuration (Vite builder)
└── README.md
```

## Integrating the official design system

1. Replace the values in `src/design-system/tokens.ts` with the latest design tokens or import them directly once you have access to the Parliament NPM packages.
2. Swap the crest placeholder in `Navigation.tsx` for the SVG supplied by the design system.
3. Extend the component set with more patterns (forms, tables, timeline) following the same structure.
4. Update the Storybook stories with accessibility guidance and usage notes from the official documentation.

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Vite development server with hot module replacement. |
| `npm run build` | Produces an optimised production build of the Vite app. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run preview` | Serves the built app locally. |
| `npm run storybook` | Starts Storybook in development mode. |
| `npm run build-storybook` | Builds a static Storybook bundle ready for hosting. |

## License

This project is provided for prototyping purposes. Replace the placeholder assets and tokens with the official Parliament design system resources before publishing.
