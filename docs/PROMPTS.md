# Prompts utilisés pour le portfolio

## P0 — Contexte du projet

Tu es un développeur full-stack expérimenté et un formateur bienveillant. Je suis étudiant en M2 Manager en ingénierie informatique — Smart & Green Building et je débute en développement web.

Projet : mon portfolio personnel, destiné à être conservé après mes études.

Stack imposée :
- frontend : React 19 avec Vite
- contenu : fichier JSON local
- backend futur : Node.js 22 et Express 5 avec ES modules
- hébergement futur : GitHub puis Vercel

Règles :
- code simple, commenté en français si nécessaire
- noms de fichiers et variables compréhensibles
- pas de dépendance inutile
- donner le chemin complet du fichier modifié
- expliquer brièvement les concepts utilisés
- vérifier les versions récentes avant d'appliquer une solution
- ne jamais inclure de mot de passe, token ou donnée personnelle sensible

## P2 — Créer un composant

À partir du contexte P0, crée `frontend/src/components/ProjetCard.jsx`.

La prop `projet` contient `titre`, `resume`, `tags`, `annee`, `technos`, `image` et `imageAlt`.

Affiche une carte accessible avec l'image, le titre, l'année, le résumé, les tags sous forme de pastilles et les technologies séparées par « · ».

Contraintes : utiliser uniquement React, CSS classique et le fichier complet. Explique ensuite chaque utilisation de `map()` et l'utilité de `key`.

## P3 — Comprendre un composant

Explique le fichier fourni ligne par ligne en français. Identifie les props, le destructuring, les listes, les clés React et les conditions JSX. Pose-moi une question si une partie du code reste ambiguë.

## P4 — Transformer le CV en JSON

À partir du CV fourni, propose uniquement les données publiques utiles au portfolio : nom, titre professionnel, accroche, disponibilité, projets et compétences.

N'inclus ni adresse postale, ni téléphone, ni autre donnée personnelle sensible, sauf un lien LinkedIn ou GitHub explicitement fourni.

Retourne un objet JSON valide, avec guillemets doubles et aucune virgule finale, puis indique quels éléments peuvent être vérifiés dans le CV.

## Ajout d'une recherche

À partir du contexte P0, ajoute une zone de recherche dans `frontend/src/App.jsx`.

Elle doit filtrer `projets` selon le titre, le résumé, les tags et les technologies. Affiche un message explicite lorsqu'aucun résultat n'est trouvé. Ne crée pas de nouvelle dépendance.

## P5 — Routes Express

Crée un Router Express dans `backend/routes/contenu.js` qui sert `/api/profil`, `/api/projets`, `/api/projets/:slug`, `/api/competences` et `/api/parcours` à partir de JSON séparés.

Ajoute le filtre `?tag=IoT`, renvoie 404 pour un projet inconnu et crée `backend/tests.http` pour tester toutes les routes. N'utilise que Express, cors et les modules Node natifs.

## P6 — Hook useApi

Écris `frontend/src/hooks/useApi.js` pour appeler une API JSON avec `useEffect` et `fetch`. Retourne `{ data, loading, error }`, annule la mise à jour si le composant est démonté et relance l'appel lorsque le chemin change.

Montre son utilisation dans une page React avec trois états : chargement, erreur et données.

## P8 — Images et CV

Dans le contexte P0, affiche une image en haut de chaque carte projet.

Utilise les champs `image` et `imageAlt` du JSON. Place les médias dans `frontend/public/images/projets/` et limite chaque image à 200 Ko environ. Utilise `alt`, `width`, `height` et `loading="lazy"`. Pour le CV, place `cv-amadou-fofana.pdf` dans `public/`, ajoute le champ `cv` au profil et un lien avec `download`.

## P9 — Recherche dans les projets

Dans la page `frontend/src/pages/Projets.jsx`, ajoute un champ contrôlé qui filtre simultanément par titre, résumé, tags et technologies sans tenir compte des majuscules. Combine cette recherche au filtre par tag déjà présent. Propose aussi un tri par année. Si aucun projet n'est trouvé, affiche « Aucun projet ne correspond à votre recherche. »

## P10 — Mode sombre

À partir du contexte P0, ajoute un bouton accessible clair/sombre dans la Navbar. Utilise les variables CSS existantes dans `:root`, applique `data-theme="sombre"` sur `<html>`, mémorise le choix dans `localStorage` et suis la préférence système au premier chargement. Garde le hook dans `frontend/src/hooks/useTheme.js`.

## P11 — Page À propos

Ajoute la route `/a-propos` dans React Router. Charge les informations publiques du profil depuis `/api/profil` et la frise depuis `/api/parcours`. Affiche les paragraphes `apropos`, les langues, les centres d'intérêt et les habilitations. Utilise uniquement les données publiques : pas d'adresse postale ni de téléphone dans le CV ou la page.
