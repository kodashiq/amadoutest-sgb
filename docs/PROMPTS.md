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

## Mode sombre

À partir du contexte P0, ajoute un hook React `useTheme` qui initialise le thème depuis `localStorage`, puis utilise les préférences système uniquement si aucune valeur n'est enregistrée.

Le thème sélectionné doit être appliqué à `document.documentElement.dataset.theme` et conservé dans `localStorage`. Ajouter un bouton accessible dans la barre de navigation.
