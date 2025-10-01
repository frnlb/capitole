Capitole Movie Browser Application
This project is a movie browsing application built with a modern frontend stack, featuring Server-Side Rendering (SSR).

Features
Server-Side Rendering (SSR).

Component-Driven UI: Organized structure using Atomic Design principles (atoms, molecules, organisms, ui).

State Management: Utilizes Zustand for global state, managing film data and the user's wishlist.

Theming: Dynamic coloring of components (e.g., IconComponent) through SCSS variables and TypeScript helpers.

Routing: Client-side routing handled by React Router DOM.

1. Installation

npm install

2. Development Mode (Vite HMR + Express SSR)
   npm run dev

Access: Navigate to http://localhost:5173

3. Production Build
   The application must be built into separate client and server bundles before running in a production environment.

npm run build
This command sequentially executes:

npm run build:client: Creates optimized client assets in ./dist/client.

npm run build:server: Creates the optimized server bundle (entry-server.js) in ./dist/server.

4. Run the application

npm run preview
