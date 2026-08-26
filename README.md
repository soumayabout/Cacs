# CACS Africa

## Chambre Africaine de Commerce et de Services

> **Plateforme institutionnelle, économique et digitale dédiée au développement des échanges, des partenariats et des opportunités d'affaires en Afrique.**

CACS Africa est une plateforme web moderne conçue pour accompagner les entreprises, institutions, investisseurs et partenaires dans leurs démarches de coopération économique, de mise en relation B2B et de développement international.

La plateforme combine :

* une vitrine institutionnelle moderne ;
* un réseau d'entreprises et de partenaires ;
* des services d'accompagnement ;
* des événements économiques ;
* un système d'adhésion ;
* un formulaire de contact intelligent ;
* une classification IA des demandes ;
* une interface multilingue FR / EN / AR ;
* une prise en charge complète du RTL arabe ;
* une architecture frontend/backend évolutive.

---

# 1. Vision du projet

CACS Africa a pour ambition de devenir une plateforme digitale de référence pour :

* connecter les entreprises africaines ;
* faciliter les échanges commerciaux ;
* développer les partenariats B2B ;
* accompagner les entreprises à l'international ;
* favoriser la coopération institutionnelle ;
* promouvoir les opportunités économiques africaines ;
* faciliter le dialogue entre entreprises, institutions et partenaires.

La plateforme est conçue selon une approche :

**Institutionnelle + Business + Digitale + Internationale**

---

# 2. Objectifs

## Objectifs fonctionnels

La plateforme permet notamment de :

* présenter CACS Africa ;
* présenter ses missions et services ;
* présenter sa gouvernance ;
* mettre en avant les événements ;
* présenter les entreprises adhérentes ;
* publier des actualités ;
* recevoir des demandes de contact ;
* recevoir des demandes d'adhésion ;
* classifier automatiquement les demandes ;
* envoyer des notifications ;
* gérer plusieurs langues ;
* proposer une expérience responsive sur tous les appareils.

## Objectifs techniques

Le projet vise :

* une architecture simple ;
* une forte maintenabilité ;
* une bonne sécurité ;
* une excellente expérience utilisateur ;
* une bonne performance ;
* une séparation claire frontend/backend ;
* une API REST structurée ;
* une base PostgreSQL ;
* une intégration IA contrôlée ;
* une préparation pour la production.

---

# 3. Architecture globale

```text
                         ┌──────────────────────┐
                         │      Utilisateur     │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      Frontend        │
                         │ React + Vite + TS    │
                         └──────────┬───────────┘
                                    │
                              REST / JSON
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │       Backend        │
                         │ Node.js + Express    │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌────────────┐       ┌──────────────┐      ┌─────────────┐
       │ PostgreSQL │       │ AI Classifier│      │ Email       │
       │ Database   │       │ Intent Router│      │ Service     │
       └────────────┘       └──────────────┘      └─────────────┘
```

---

# 4. Stack technique

## Frontend

* React
* TypeScript
* Vite
* React Router
* Tailwind CSS
* Lucide React
* Axios / Fetch
* i18next
* react-i18next

## Backend

* Node.js
* Express
* TypeScript
* REST API
* Zod
* Helmet
* CORS
* Rate limiting

## Database

* PostgreSQL

## IA

Architecture compatible avec un fournisseur LLM externe.

Le système doit également disposer d'un fallback déterministe lorsque l'API IA n'est pas disponible.

## Email

Architecture abstraite compatible avec :

* SMTP
* Resend
* Brevo
* autre fournisseur transactionnel

## Déploiement

Frontend compatible avec :

* Netlify
* Vercel

Backend compatible avec :

* Render
* Railway
* VPS
* Docker

Database :

* PostgreSQL managé
* PostgreSQL local
* PostgreSQL Docker

---

# 5. Structure du repository

```text
Cacs/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── ui/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── events/
│   │   │   ├── members/
│   │   │   ├── news/
│   │   │   └── contact/
│   │   │
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   ├── data/
│   │   ├── i18n/
│   │   └── lib/
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── validators/
│   │   ├── utils/
│   │   └── app.ts
│   │
│   └── package.json
│
├── database/
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
```

> La structure exacte peut évoluer selon l'implémentation finale. Les responsabilités doivent cependant rester séparées.

---

# 6. Pages principales

## Accueil

Route :

```text
/
```

Contient :

* Header institutionnel ;
* Hero ;
* actualités / partenariats ;
* chiffres clés ;
* présentation CACS ;
* mot du Président ;
* missions ;
* services ;
* événements ;
* Africa Business Days ;
* adhérents ;
* partenaires ;
* appel à l'adhésion ;
* newsletter ;
* Footer.

---

## À propos

```text
/about
```

Sections :

* Qui sommes-nous ?
* Vision ;
* Mission ;
* Valeurs ;
* Mot du Président ;
* Gouvernance ;
* Conseil d'administration.

---

## Services

```text
/services
```

Services présentés :

* accompagnement ;
* développement commercial ;
* mise en relation B2B ;
* plaidoyer ;
* lobbying ;
* coopération internationale ;
* intelligence économique ;
* internationalisation ;
* événements économiques.

---

## Événements

```text
/events
```

Fonctionnalités :

* liste des événements ;
* recherche ;
* filtres ;
* catégories ;
* dates ;
* lieux ;
* détails.

Page détaillée :

```text
/events/:id
```

---

## Adhérents

```text
/members
```

Filtres :

* pays ;
* secteur ;
* type d'entreprise.

Secteurs possibles :

* Transport ;
* Finance ;
* Technologie ;
* Agroalimentaire ;
* Industrie ;
* Services ;
* Commerce.

---

## Actualités

```text
/news
```

Fonctionnalités :

* liste des articles ;
* catégories ;
* recherche ;
* détail d'un article ;
* articles associés ;
* partage.

Page :

```text
/news/:slug
```

---

## Adhésion

```text
/membership
```

Formulaire intelligent permettant à une entreprise de transmettre une demande d'adhésion.

---

## Contact

```text
/contact
```

Formulaire institutionnel de contact.

---

# 7. Design System

L'identité graphique CACS Africa repose sur une esthétique :

**institutionnelle + africaine + moderne + premium**

## Couleurs

### Bleu institutionnel

```text
#0B1F3A
```

Utilisation :

* Header ;
* Footer ;
* titres importants ;
* sections institutionnelles.

### Bleu secondaire

```text
#123B68
```

Utilisation :

* surfaces ;
* éléments secondaires ;
* navigation.

### Vert émeraude

```text
#0F8B6D
```

Utilisation :

* CTA secondaires ;
* actions positives ;
* éléments interactifs.

### Or

```text
#C9A227
```

Utilisation :

* badges ;
* chiffres clés ;
* accents ;
* éléments institutionnels.

### Neutres

```text
#FFFFFF
#F5F7FA
#E5E7EB
#111827
```

---

# 8. Principes UI/UX

Le design doit respecter :

* simplicité ;
* hiérarchie visuelle ;
* cohérence ;
* lisibilité ;
* espace blanc ;
* responsive design ;
* accessibilité ;
* animations modérées.

Éviter :

* animations excessives ;
* gradients agressifs ;
* couleurs non institutionnelles ;
* composants surchargés ;
* textes trop longs dans les cartes ;
* interfaces génériques.

---

# 9. Internationalisation

La plateforme supporte :

```text
Français
English
العربية
```

Structure :

```text
messages/
├── fr.json
├── en.json
└── ar.json
```

Aucun contenu important ne doit être dupliqué directement dans les composants.

Exemple :

```ts
t("home.hero.title")
```

---

# 10. Support RTL

Lorsque la langue arabe est active :

```html
dir="rtl"
```

doit être appliqué correctement.

Le RTL doit couvrir :

* Header ;
* navigation ;
* formulaires ;
* cartes ;
* grilles ;
* boutons ;
* icônes directionnelles ;
* Footer ;
* menus mobiles.

Il ne faut pas simplement aligner le texte à droite.

---

# 11. Système d'adhésion

Le formulaire contient notamment :

```text
Nom de l'entreprise
Secteur d'activité
Nom du représentant
Email professionnel
Téléphone
WhatsApp
Pays
Site web
Message
```

Le formulaire doit disposer de :

* validation côté client ;
* validation côté serveur ;
* messages d'erreur ;
* état de chargement ;
* état de succès ;
* état d'erreur ;
* protection anti-spam ;
* confirmation.

---

# 12. Classification IA

Le système utilise un modèle Human-in-the-Loop.

Le message utilisateur est analysé afin de déterminer une intention.

Catégories :

```text
INFORMATION
MEMBERSHIP
COLLABORATION
PARTNERSHIP
EVENT
BUSINESS
OTHER
```

Exemple :

```text
Utilisateur :
"Nous souhaitons rejoindre la CACS Africa."

        ↓

AI Intent Router

        ↓

MEMBERSHIP
```

La réponse peut ensuite être personnalisée.

---

# 13. Principe Human-in-the-Loop

L'IA ne prend aucune décision institutionnelle définitive.

Elle peut :

* classifier ;
* résumer ;
* préparer une réponse ;
* proposer une orientation.

La décision finale reste humaine.

```text
Utilisateur
     ↓
Formulaire
     ↓
IA
     ↓
Classification
     ↓
Équipe CACS
     ↓
Décision humaine
```

---

# 14. API Backend

## Health

```http
GET /api/health
```

Réponse :

```json
{
  "success": true,
  "status": "ok"
}
```

---

## Contact

```http
POST /api/contact
```

Exemple :

```json
{
  "name": "Nom",
  "company": "Entreprise",
  "email": "contact@example.com",
  "phone": "+212000000000",
  "country": "Morocco",
  "subject": "Partenariat",
  "message": "Nous souhaitons collaborer avec CACS Africa."
}
```

---

## Adhésion

```http
POST /api/membership
```

---

## Événements

```http
GET /api/events
GET /api/events/:id
```

---

## Actualités

```http
GET /api/news
GET /api/news/:slug
```

---

## Membres

```http
GET /api/members
```

---

## Newsletter

```http
POST /api/newsletter
```

---

# 15. Base de données

Le modèle de données doit prévoir au minimum :

```text
users
members
events
news
contact_requests
membership_requests
newsletter_subscribers
ai_classifications
```

Relations et contraintes doivent être définies proprement.

Les données sensibles ne doivent jamais être exposées publiquement.

---

# 16. Variables d'environnement

Créer :

```text
.env
```

à partir de :

```text
.env.example
```

Exemple :

```env
NODE_ENV=development

PORT=4000

DATABASE_URL=postgresql://user:password@localhost:5432/cacs

CORS_ORIGIN=http://localhost:5173

AI_API_KEY=

EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASSWORD=
EMAIL_FROM=
```

Les secrets ne doivent jamais être commités.

---

# 17. Installation

## Prérequis

Installer :

* Node.js 20+
* npm 10+
* PostgreSQL 16+
* Git

Vérifier :

```bash
node --version
npm --version
git --version
psql --version
```

---

# 18. Cloner le projet

```bash
git clone https://github.com/soumayabout/Cacs.git
cd Cacs
```

---

# 19. Installation frontend

```bash
cd frontend
npm install
```

Lancer :

```bash
npm run dev
```

Le frontend sera disponible sur :

```text
http://localhost:3000
```

---

# 20. Installation backend

Depuis la racine :

```bash
cd backend
npm install
```

Configurer :

```bash
cp ../.env.example .env
```

Puis renseigner les variables nécessaires.

Lancer :

```bash
npm run dev
```

API :

```text
http://localhost:4000
```

Health check :

```text
http://localhost:4000/api/health
```

---

# 21. PostgreSQL

Créer la base :

```sql
CREATE DATABASE cacs;
```

Configurer ensuite :

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/cacs
```

Exécuter le schéma de base de données :

```bash
psql -U USER -d cacs -f ../database/schema.sql
```

---

# 22. Docker

Le projet peut être exécuté avec Docker pour simplifier l'environnement local.

Services possibles :

```text
frontend
backend
postgres
```

Lancer :

```bash
docker compose up --build
```

Arrêter :

```bash
docker compose down
```

---

# 23. Sécurité

Le backend doit appliquer :

* Helmet ;
* CORS ;
* rate limiting ;
* validation des entrées ;
* sanitation ;
* gestion centralisée des erreurs ;
* protection des secrets ;
* limitation des payloads ;
* contrôle des origines.

Les clés API ne doivent jamais être placées dans :

```text
frontend/src/
```

---

# 24. Gestion des erreurs

Le backend utilise une structure homogène.

Succès :

```json
{
  "success": true,
  "data": {}
}
```

Erreur :

```json
{
  "success": false,
  "message": "Une erreur est survenue.",
  "code": "INTERNAL_ERROR"
}
```

Le frontend doit gérer :

* erreurs API ;
* timeout ;
* serveur indisponible ;
* erreurs de validation ;
* pages inexistantes ;
* états vides.

---

# 25. Accessibilité

La plateforme doit respecter les principes WCAG.

Points importants :

* navigation clavier ;
* focus visible ;
* contraste ;
* labels ;
* alt text ;
* aria-label ;
* structure sémantique ;
* boutons accessibles ;
* formulaires accessibles ;
* support du zoom ;
* support RTL.

---

# 26. Responsive Design

La plateforme doit être testée sur :

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Aucun élément ne doit provoquer de :

```text
horizontal overflow
```

---

# 27. Performance

Optimisations prévues :

* lazy loading ;
* compression des images ;
* formats modernes ;
* réduction du JavaScript ;
* composants réutilisables ;
* requêtes API optimisées ;
* pagination ;
* cache lorsque nécessaire.

Éviter les bibliothèques inutiles.

---

# 28. SEO

Les pages publiques doivent contenir :

* title ;
* meta description ;
* canonical ;
* Open Graph ;
* Twitter metadata ;
* robots ;
* sitemap.

Exemple :

```text
CACS Africa — Chambre Africaine de Commerce et de Services
```

---

# 29. Tests

Les tests doivent couvrir les fonctionnalités critiques.

Backend :

```text
Health API
Contact
Membership
Validation
AI classifier
Errors
```

Frontend :

```text
Navigation
Header
Language selector
Contact form
Membership form
Responsive states
```

Commandes :

```bash
npm run test
```

---

# 30. Build

Frontend :

```bash
cd frontend
npm run build
```

Prévisualisation :

```bash
npm run preview
```

Backend :

```bash
cd backend
npm run build
```

Le projet ne doit pas être considéré comme prêt pour production si le build échoue.

---

# 31. Git

Ne jamais versionner :

```text
node_modules/
dist/
.env
.env.local
*.log
coverage/
```

Le repository doit contenir :

```text
.env.example
```

mais jamais les véritables secrets.

---

# 32. Workflow de développement

Avant chaque modification importante :

```text
1. Comprendre
2. Modifier
3. Tester
4. Builder
5. Vérifier
6. Commit
```

Éviter les changements massifs non vérifiés.

---

# 33. Convention de commits

Utiliser Conventional Commits.

Exemples :

```text
feat(frontend): redesign homepage

feat(backend): add membership API

feat(i18n): add Arabic RTL support

feat(ai): add intent classification

fix(contact): validate email server-side

fix(ui): improve mobile navigation

refactor(api): separate contact service

docs: update installation guide
```

---

# 34. Déploiement

## Frontend

Le frontend peut être déployé sur :

* Netlify ;
* Vercel.

Variables :

```text
VITE_API_URL
```

doit pointer vers l'API backend de production.

---

## Backend

Le backend peut être déployé sur :

* Render ;
* Railway ;
* VPS ;
* Docker.

Variables d'environnement à configurer dans le fournisseur.

---

## PostgreSQL

Utiliser une base PostgreSQL managée pour la production.

Ne jamais utiliser les identifiants locaux en production.

---

# 35. Environnement de production

Architecture recommandée :

```text
                    Internet
                       │
                       ▼
                ┌─────────────┐
                │  Frontend   │
                │   Netlify   │
                └──────┬──────┘
                       │
                    HTTPS
                       │
                       ▼
                ┌─────────────┐
                │   Backend   │
                │   Express   │
                └──────┬──────┘
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
     PostgreSQL       AI          Email
```

---

# 36. Principes de développement

Le projet doit respecter :

### KISS

Keep It Simple.

### DRY

Don't Repeat Yourself.

### SOLID

Responsabilités clairement séparées.

### Type Safety

TypeScript partout où pertinent.

### Security by Design

La sécurité est intégrée dès la conception.

### Accessibility by Design

L'accessibilité n'est pas ajoutée à la fin.

### Mobile First

Le mobile est traité comme une priorité.

---

# 37. Règles concernant les données institutionnelles

Aucune information institutionnelle ne doit être inventée.

Ne pas inventer :

* partenaires ;
* membres du Conseil ;
* statistiques ;
* événements ;
* dates ;
* certifications ;
* adresses ;
* numéros de téléphone ;
* logos ;
* partenariats.

Lorsqu'une information officielle manque, utiliser :

```text
[À CONFIRMER — INFORMATION OFFICIELLE CACS]
```

---

# 38. Qualité attendue

Le résultat final doit être :

* professionnel ;
* institutionnel ;
* moderne ;
* responsive ;
* accessible ;
* sécurisé ;
* performant ;
* multilingue ;
* maintenable ;
* évolutif.

La plateforme ne doit pas ressembler à un template générique.

Elle doit présenter une identité propre à CACS Africa.

---

# 39. Checklist finale

## Frontend

* [ ] Header responsive
* [ ] Hero
* [ ] Navigation
* [ ] Home
* [ ] About
* [ ] Services
* [ ] Events
* [ ] Members
* [ ] News
* [ ] Contact
* [ ] Membership
* [ ] Footer
* [ ] Mobile navigation
* [ ] Loading states
* [ ] Error states
* [ ] Empty states

## Backend

* [ ] Express
* [ ] API health
* [ ] Contact API
* [ ] Membership API
* [ ] Events API
* [ ] News API
* [ ] Members API
* [ ] Newsletter API
* [ ] Validation
* [ ] Error handler
* [ ] CORS
* [ ] Helmet
* [ ] Rate limiting

## Database

* [ ] PostgreSQL
* [ ] Schema
* [ ] Migrations
* [ ] Seeds
* [ ] Relations
* [ ] Indexes

## IA

* [ ] Intent classification
* [ ] Fallback
* [ ] Human-in-the-loop
* [ ] Response generation
* [ ] Error handling

## Internationalisation

* [ ] Français
* [ ] English
* [ ] العربية
* [ ] RTL
* [ ] Translations
* [ ] Language selector

## Qualité

* [ ] TypeScript
* [ ] Tests
* [ ] Build
* [ ] Responsive
* [ ] Accessibility
* [ ] SEO
* [ ] Security
* [ ] Performance

## Production

* [ ] Environment variables
* [ ] Frontend deployment
* [ ] Backend deployment
* [ ] PostgreSQL production
* [ ] HTTPS
* [ ] CORS production
* [ ] Monitoring
* [ ] Backup strategy

---

# 40. Statut du projet

**Projet :** CACS Africa
**Organisation :** Chambre Africaine de Commerce et de Services
**Type :** Plateforme institutionnelle et business
**Architecture :** Full Stack
**Frontend :** React + Vite + TypeScript
**Backend :** Node.js + Express + TypeScript
**Database :** PostgreSQL
**IA :** Intent Routing Human-in-the-Loop
**Langues :** Français / English / العربية
**RTL :** Oui
**Responsive :** Oui
**Production Ready :** À valider après audit, tests et déploiement

---

# 41. Commandes rapides

## Développement

```bash
git clone https://github.com/soumayabout/Cacs.git

cd Cacs

cd frontend
npm install
npm run dev
```

Backend :

```bash
cd backend
npm install
npm run dev
```

## Build

```bash
cd frontend
npm run build
```

```bash
cd backend
npm run build
```

## Tests

```bash
npm run test
```

---

# 42. Conclusion

CACS Africa est conçu comme une véritable plateforme digitale institutionnelle destinée à connecter les acteurs économiques africains et à faciliter les opportunités de coopération.

L'architecture privilégie :

**Simplicité → Sécurité → Maintenabilité → Performance → Expérience utilisateur**

Le projet doit évoluer progressivement vers une plateforme complète intégrant :

* services institutionnels ;
* réseau d'entreprises ;
* événements ;
* actualités ;
* adhésion ;
* intelligence artificielle ;
* coopération internationale ;
* outils business.

---

## CACS Africa

**Connecter l'Afrique.
Construire les opportunités.**
