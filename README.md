# Our Little Forever

A responsive romantic scrapbook built with React, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Personalize it

Nearly all editable text, dates, photos, places, letters, reasons, keepsakes, and music live in one file:

`src/data/scrapbook.ts`

Replace the curated image URLs with imported local images whenever you are ready. The music section uses an Apple Music embed configured through `playlist.appleMusicUrl` and `playlist.embedUrl`. Music never autoplays.

## Develop with Docker Compose

The development environment runs entirely in Docker using Node.js 22. The host machine only needs Docker Desktop or another Docker installation with Compose; a host Node.js installation is not required.

Build the image and start the Vite development server:

```bash
docker compose up --build
```

Open [http://localhost:5173](http://localhost:5173). The project directory is mounted into the container, so edits made on the host trigger Vite hot reload. Container dependencies are retained in the named `node_modules` volume instead of being written to the host.

For subsequent starts, the existing image and dependency volume can be reused:

```bash
docker compose up
```

Stop the development server with `Ctrl+C`, then remove the containers and network:

```bash
docker compose down
```

If `package.json` changes, recreate the dependency volume and rebuild the image so the updated packages are installed:

```bash
docker compose down --volumes
docker compose up --build
```

To reset installed dependencies completely, also remove the named volume:

```bash
docker compose down --volumes
```

## Develop with a local Node.js installation

Docker Compose is the recommended workflow. If Node.js is already installed locally, the project can alternatively be started with:

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
```

## Hidden details

- Find three low-contrast hearts around the page.
- Type `I love you` anywhere.
- Enter the classic Konami code.
- Click the tiny star at the end.

The interface respects `prefers-reduced-motion`, includes keyboard controls for the gallery lightbox, and supports light and dark themes.
