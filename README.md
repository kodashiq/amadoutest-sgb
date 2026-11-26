# Portfolio SGB — Amadou Fofana

Portfolio full-stack React et Express pour le Master Smart & Green Building.

Site en ligne : à renseigner après le déploiement Vercel.

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

Créer deux projets Vercel liés à ce dépôt privé :

1. Projet API avec **Root Directory** `backend`. Ajouter `FRONTEND_URL` avec l'URL de production du site frontend.
2. Projet web avec **Root Directory** `frontend`. Ajouter `VITE_API_URL` avec l'URL de production de l'API, sans barre oblique finale.

Après avoir défini les variables, redéployer les deux projets. Le fichier `frontend/vercel.json` permet de recharger directement les routes React Router.

## GitHub

https://github.com/kodashiq/amadoutest-sgb
