# Trésor JCF — Camp 2026

Application de gestion financière du camp (frais de participation, dons,
dépenses, cotisations) sous forme d'un site à une seule page, synchronisée
en temps réel entre tous tes appareils via Firebase (Firestore + Authentication).

## Déployer sur Vercel

### Option A — Sans compte technique, par glisser-déposer
1. Va sur https://vercel.com et crée un compte gratuit (avec ton email ou Google).
2. Une fois connecté, clique sur **"Add New..."** puis **"Project"**.
3. Choisis **"Deploy"** via l'onglet qui permet d'uploader un dossier
   (glisse-dépose le dossier `tresor-jcf-vercel` complet).
4. Clique sur **Deploy**. Après quelques secondes, Vercel te donne un lien
   du type `https://tresor-jcf-xxxx.vercel.app` — c'est ton app, en ligne.

### Option B — Avec la commande Vercel (si tu as Node.js installé)
Depuis ce dossier, dans un terminal :
```
npm install -g vercel
vercel --prod
```

### Option C — Via GitHub
1. Crée un dépôt GitHub et mets-y les fichiers de ce dossier.
2. Sur vercel.com, clique **"Add New..." → "Project"**, puis **"Import"**
   depuis GitHub, et sélectionne ce dépôt.
3. Laisse les réglages par défaut (aucun "Build Command" n'est nécessaire,
   c'est un site 100% statique) et clique **Deploy**.

## Important à savoir

- **Les données sont synchronisées entre tous les appareils** via Firebase :
  ce que tu ajoutes sur ton téléphone apparaît automatiquement sur ton
  ordinateur, et inversement — dès qu'il y a une connexion internet.
- **La connexion se fait avec un compte email/mot de passe** créé dans la
  console Firebase (Authentication → Users). L'app ne permet pas de créer
  un compte soi-même : seules les personnes à qui tu as créé un accès
  peuvent se connecter.
- **La configuration Firebase** (`firebaseConfig`) est directement intégrée
  dans `index.html`. Ce n'est pas un secret absolu (elle est visible dans
  le code une fois le site en ligne) — la vraie protection vient des règles
  de sécurité Firestore, qui n'autorisent l'accès qu'aux personnes connectées.
- Le fichier `index.html` a besoin d'une connexion internet pour fonctionner
  (chargement de Firebase et synchronisation des données) — contrairement à
  une version 100% locale, il ne peut pas être ouvert hors-ligne dès le
  premier lancement sur un appareil.
