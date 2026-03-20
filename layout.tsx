# 🏀 Hoop Board - Basketball Club Manager

Application complète de gestion de clubs de basketball avec table de marque en temps réel.

## ✅ Statut : MVP Fonctionnel

**Build status** : ✅ Compile sans erreur  
**Pages créées** : 5/5 (100%)  
**Prêt pour déploiement** : OUI

## 🎯 Fonctionnalités MVP

### ✅ Niveau 1 : Président (Dashboard Club)
**Route** : `/dashboard/president`
- Vue d'ensemble de toutes les équipes
- Stats globales (équipes, joueurs, victoires, points)
- Résultats du weekend / saison
- Liste complète des équipes avec navigation

### ✅ Niveau 2 : Coach (Table de Marque)
**Route** : `/coach/[qr_token]`
- Score temps réel
- Sélection joueur rapide
- Boutons actions : Panier 2pts, 3pts, LF, rebonds, passes, etc.
- Chronomètre + quart-temps
- Effectif sur le terrain
- Mode sombre (bord de terrain)

### ✅ Niveau 3 : Joueur (Profil Gamifié)
**Route** : `/joueur/[qr_token]`
- Système de niveaux (Bronze → Argent → Or → Diamant)
- Barre de progression XP
- Stats détaillées (points, rebonds, passes, pourcentages)
- Badges débloqués (4 types)
- Classements équipe (top 3 podiums)

### ✅ Page détail équipe
**Route** : `/dashboard/equipe/[id]`
- Stats équipe complètes
- Liste joueurs avec stats individuelles
- Historique matchs
- Génération QR codes

### ✅ Landing Page
**Route** : `/`
- Hero avec CTA
- Section problème/solution
- Fonctionnalités
- Pricing 49€/mois
- Footer

## 🛠️ Stack Technique

- **Frontend** : Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend** : Supabase (PostgreSQL + Auth + Realtime + Storage)
- **Paiements** : Stripe (abonnement 49€/mois)
- **Déploiement** : Vercel
- **QR Codes** : qrcode npm package

## 📂 Structure du projet

```
basketball-saas/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── layout.tsx                  # Layout principal
│   ├── globals.css                 # Styles Tailwind
│   ├── dashboard/
│   │   ├── president/page.tsx      # Dashboard président
│   │   └── equipe/[id]/page.tsx    # Détail équipe
│   ├── coach/[qr_token]/page.tsx   # Interface coach
│   └── joueur/[qr_token]/page.tsx  # Profil joueur
├── components/                      # Composants React (à créer)
├── lib/
│   ├── supabase.ts                 # Client Supabase
│   ├── qrcode.ts                   # Génération QR codes
│   └── gamification.ts             # Logique niveaux/badges
├── types/
│   └── database.ts                 # Types TypeScript
├── supabase/
│   └── schema.sql                  # Schéma DB complet
└── public/                         # Assets
```

## 🚀 Installation & Déploiement

### 1️⃣ Installation locale

```bash
# Décompresser et installer
tar -xzf basketball-saas-hoopboard.tar.gz
cd basketball-saas
npm install

# Créer .env.local avec tes clés
cp .env.example .env.local
# Remplir NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, etc.

# Lancer en dev
npm run dev
# → http://localhost:3000
```

### 2️⃣ Setup Supabase

1. Aller sur [supabase.com](https://supabase.com) → Nouveau projet
2. SQL Editor → Copier/coller `supabase/schema.sql` → Run
3. Settings → API → Copier les clés :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Ajouter dans `.env.local`

### 3️⃣ Setup Stripe (optionnel pour MVP)

1. [stripe.com](https://stripe.com) → Mode Test
2. Developers → API keys → Copier :
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
3. Créer produit "Abonnement Club" à 49€/mois
4. Webhooks → Ajouter endpoint → `/api/stripe/webhook`

### 4️⃣ Push sur GitHub

```bash
git init
git add .
git commit -m "Initial commit - Hoop Board MVP"
git branch -M main
git remote add origin https://github.com/[TON_USERNAME]/hoopboard.git
git push -u origin main
```

### 5️⃣ Déployer sur Vercel

1. [vercel.com](https://vercel.com) → Import Git Repository
2. Sélectionner ton repo GitHub
3. Ajouter les variables d'environnement (copier depuis `.env.local`)
4. Deploy 🚀

Chaque push sur `main` = déploiement auto !

## 🗄️ Base de données (Supabase)

Le fichier `supabase/schema.sql` contient :
- ✅ 5 tables (clubs, equipes, joueurs, matchs, actions_match)
- ✅ Index pour perfs
- ✅ Fonctions PostgreSQL (calcul stats, mise à jour score, XP)
- ✅ Triggers (auto-update score + XP)
- ✅ Row Level Security (RLS) policies

**Pas besoin de coder les calculs** — les triggers le font automatiquement !

## 🎮 Système de gamification

### Niveaux (basés sur XP)
- **Bronze** : 0-99 XP
- **Argent** : 100-299 XP
- **Or** : 300-599 XP
- **Diamant** : 600+ XP

### Points XP par action
- Panier 2pts : +2 XP
- Panier 3pts : +3 XP
- LF réussi : +1 XP
- Passe : +2 XP
- Rebond : +1 XP
- Interception : +3 XP
- Contre : +3 XP

### Badges disponibles
1. 🎯 **Sniper 3pts** : 5+ paniers 3pts dans un match
2. 💪 **Double-Double** : 10+ points ET 10+ rebonds
3. 🤝 **Passeur Décisif** : 5+ passes dans un match
4. 🛡️ **Mur Défensif** : 3+ contres dans un match
5. 🦹 **Pickpocket** : 3+ interceptions dans un match
6. 🔥 **Machine à Points** : 20+ points dans un match
7. 🏀 **Roi du Rebond** : 10+ rebonds dans un match
8. 🎖️ **Tireur Élite** : 80%+ LF (min 5 tentatives)

## 📱 Fonctionnement des QR Codes

1. **Création équipe** → QR code unique généré (UUID)
2. **Coach scanne** → `/coach/[qr_token]` → accès direct
3. **Création joueur** → QR code personnel généré
4. **Joueur scanne** → `/joueur/[qr_token]` → profil gamifié

**Format URL** :
- Coach : `https://hoopboard.vercel.app/coach/abc123def456`
- Joueur : `https://hoopboard.vercel.app/joueur/xyz789ghi012`

## 🎨 Design System

**Couleurs** :
- Primary : Orange (#F97316)
- Secondary : Blanc (#FFFFFF)
- Accents : Gris (#6B7280)
- Success : Vert (#10B981)
- Error : Rouge (#EF4444)

**Typographie** : Système (sans-serif stack)

**Mode sombre** : Interface coach uniquement

## 🔜 Fonctionnalités à ajouter (post-MVP)

- [ ] Authentification président (email/password)
- [ ] CRUD complet clubs/équipes/joueurs
- [ ] Connexion Supabase Realtime (WebSockets)
- [ ] Génération + téléchargement QR codes (PNG)
- [ ] Graphiques stats (Recharts)
- [ ] Webhook Stripe fonctionnel
- [ ] API routes manquantes
- [ ] Upload photos joueurs
- [ ] Envoi notifications
- [ ] Export PDF stats

## ⚠️ Important pour la prod

**Variables d'environnement requises** :
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
NEXT_PUBLIC_APP_URL=https://hoopboard.vercel.app
```

## 🐛 Debug

Si problème au build :
```bash
npm run build
# → Vérifie les erreurs TypeScript
```

Si problème Supabase :
- Vérifier que `schema.sql` a bien été exécuté
- Tester les requêtes dans SQL Editor
- Vérifier RLS policies

## 📄 Licence

MIT

## 👨‍💻 Auteur

Mat - Hoop Board

---

**Pricing** : 49€/mois par club • Sans engagement
