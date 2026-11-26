# Portfolio SGB — Amadou Fofana

Portfolio full-stack React et Express pour le Master Smart & Green Building.

## Architecture

- `frontend/` : React 19, Vite, React Router, recherche, tri et thème sombre
- `backend/` : API Express 5, données JSON
- `docs/PROMPTS.md` : prompts utilisés pendant le projet

## Démarrer

Dans deux terminaux :

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

- Frontend : http://localhost:5173
- API : http://localhost:3000

## Vérifier

```bash
cd frontend
npm run lint
npm run build
```

Puis tester les routes avec `backend/tests.http` ou sur http://localhost:3000/api/projets.

## GitHub

https://github.com/kodashiq/amadoutest-sgb
