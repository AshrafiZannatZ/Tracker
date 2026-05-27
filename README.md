# Tracker — Frontend Bootstrap

This is a frontend-only starter scaffold using Vite, React, TailwindCSS, and Zustand. It's prepared for using the `shadcn-ui` CLI to add component primitives and variants.

Getting started

1. Install dependencies (using your package manager):

```bash
pnpm install
# or
npm install
# or
yarn
```

2. Start the dev server:

```bash
pnpm dev
```

3. Use the shadcn CLI to add components (optional):

```bash
pnpm run shadcn
# then follow the interactive prompts to "add" components, e.g. "button"
```

Notes
- The project uses TailwindCSS. After running `pnpm install`, run the dev server and the app will be available at `http://localhost:3000`.
- Replace the placeholder UI in `src/components/ui` by running the `shadcn-ui` CLI to scaffold the official components.

Files of interest
- [src/App.tsx](src/App.tsx)
- [src/store/useStore.ts](src/store/useStore.ts)
- [src/components/ui/Button.tsx](src/components/ui/Button.tsx)
- [tailwind.config.cjs](tailwind.config.cjs)
- [package.json](package.json)
