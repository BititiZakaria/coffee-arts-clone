# Coffee Arts Clone - Examen Composants Logiciels d'Entreprise

Clone fonctionnel du site [Coffee Arts Paris](https://www.coffeeartsparis.fr/)

## 📋 Description du projet

Application web complète avec :
- **Frontend** : React.js
- **Backend** : Node.js / Express.js
- **Base de données** : MongoDB
- **Interface admin** : Dashboard complet
- **Paiement** : Simulation de paiement
- **Upload images** : Cloudinary

## 🎯 Fonctionnalités

### Front-office
- ✅ Accueil
- ✅ Café / Carte
- ✅ Ateliers (réservation)
- ✅ Boutique (panier, commandes)
- ✅ Événements
- ✅ Blog
- ✅ À propos
- ✅ Contact
- ✅ Espace client (profil, commandes, réservations)

### Administration
- ✅ Dashboard avec statistiques
- ✅ Gestion des produits
- ✅ Gestion des ateliers
- ✅ Gestion des commandes
- ✅ Gestion des réservations
- ✅ Gestion des messages contact
- ✅ Gestion des articles blog
- ✅ Gestion des utilisateurs

## 🚀 Installation

### Prérequis
- Node.js v16+
- MongoDB
- Compte Cloudinary

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

## 📁 Structure du projet

```
coffee-arts-clone/
├── client/                  # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── admin/
│   │   │   └── client/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── vercel.json
│
└── server/                  # Backend Express
    ├── config/
    ├── controllers/
    ├── middlewares/
    ├── models/
    ├── routes/
    ├── utils/
    ├── seed/
    ├── .env
    ├── index.js
    ├── package.json
    └── vercel.json
```

## 🔐 Variables d'environnement

### Client (.env)
```
VITE_API_URL=http://localhost:5000/api
```

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://...
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 📝 Comptes de test

### Admin
- Email: admin@coffeearts.com
- Mot de passe: Admin123!

### Client
- Email: client@coffeearts.com
- Mot de passe: Client123!

## 🔗 Déploiement

- **Frontend** : [Vercel Frontend Link](#)
- **Backend** : [Vercel Backend Link](#)

## 👥 Auteur

Projet réalisé pour l'examen ISITN - 4ème année

## 📅 Date

Juin 2026
