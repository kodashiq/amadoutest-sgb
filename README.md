# Portfolio SGB — Amadou Fofana

Portfolio full-stack React et Express pour le Master Smart & Green Building.

Site en ligne : https://amadoutest-sgb.vercel.app
API : https://amadoutest-api.vercel.app

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

## Déploiement Vercel

Deux projets Vercel sont déployés depuis ce dépôt privé :

1. `amadoutest-api`, avec **Root Directory** `backend` et `FRONTEND_URL=https://amadoutest-sgb.vercel.app`.
2. `amadoutest-sgb`, avec **Root Directory** `frontend` et `VITE_API_URL=https://amadoutest-api.vercel.app`.

Le fichier `frontend/vercel.json` permet de recharger directement les routes React Router. Les fonctions dans `backend/api/` exposent les routes Express à Vercel.

## GitHub

https://github.com/kodashiq/amadoutest-sgb
