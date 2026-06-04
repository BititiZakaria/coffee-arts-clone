# UI E2E Test Report

Date: 2026-06-04

Résumé
- Objectif: vérifier l'authentification front↔back et les actions admin (create/update/delete) pour produits, ateliers et articles de blog.
- Environnement: local (backend http://localhost:5000, frontend http://localhost:3002 et http://localhost:3001)

Actions exécutées
- Login programmatique: POST `/api/auth/login` with `admin@coffeearts.com / Admin123!` → 200, token reçu.
- Login UI: rempli formulaire `/login` → token stocké en `localStorage` → `/api/auth/profile` → 200.
- API smoke: GET `/api/products`, `/api/workshops`, `/api/blog`, `/api/orders`, `/api/bookings`, `/api/contact` → all 200.
- Admin UI E2E (automatisé via browser page):
  - Créer puis supprimer un atelier (`/admin/workshops`) → OK (created + deleted).
  - Créer puis supprimer un article (`/admin/blog`) → OK (created + deleted).

Erreurs rencontrées
- Erreur initiale de déploiement Vercel causée par la propriété `runtime` dans `server/vercel.json`. Action: supprimée.

Modifications appliquées
- `client/src/pages/Admin/ManageWorkshops.jsx` — connecté à `workshopService` (list/create/delete).
- `client/src/pages/Admin/ManageBlog.jsx` — connecté à `blogService` (list/create/delete).
- `client/src/pages/Admin/AdminOrders.jsx` — connecté à `orderService` (list + status update UI).
- `server/vercel.json` — retiré `runtime` (fix déploiement Vercel).
- `server/package.json` — ajouté `engines.node: 18.x` (guidage Vercel).

Vérifications et preuves
- Requêtes reproduites depuis Node/browser; exemples de statuts montrés dans terminal (login 200, profile 200, endpoints 200).
- Token visible en `localStorage` pendant tests.

Commandes pour reproduire localement
```bash
# Backend
cd server
npm install
npm run dev   # démarre Express sur le port 5000

# Frontend
cd client
npm install
npm run dev   # démarre Vite (par défaut 3000+, ici 3001/3002)
```

Points d'attention / recommandations
- En prod (Vercel) : vérifier que `MONGO_URI`, `JWT_SECRET`, `CLOUDINARY_*` sont configurés dans Project Settings → Environment Variables.
- Si vous observez 401 : vérifier `localStorage.token` et les en-têtes `Authorization` envoyés par le front.
- Si vous observez 500 : consulter les logs du serveur (local ou Vercel) pour stack trace et vérifier variables d'env.

Prochaines étapes proposées
1. Vérifier le déploiement Vercel (trigger redeploy) et lire logs si erreurs persistantes.
2. Étendre les tests UI à commandes/booking flows et aux uploads (après config Cloudinary).

Fichier créé par automation de tests — contactez‑moi si vous voulez que j'ouvre un PR ou que je déclenche le redeploy.
