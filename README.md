# Trésor JCF — Camp 2026

Application de gestion financière du camp (frais de participation, dons, dépenses)
sous forme d'un site statique à une seule page. Aucune base de données : les
données sont sauvegardées dans le navigateur de la personne qui utilise l'app.

## Déployer sur Vercel (le plus simple)

### Option A — Sans compte technique, par glisser-déposer
1. Va sur https://vercel.com et crée un compte gratuit (avec ton email ou Google).
2. Une fois connecté, clique sur **"Add New..."** puis **"Project"**.
3. Choisis **"Deploy"** via l'onglet qui permet d'uploader un dossier
   (glisse-dépose le dossier `tresor-jcf-vercel` complet, avec `index.html`
   et `vercel.json` à l'intérieur).
4. Clique sur **Deploy**. Après quelques secondes, Vercel te donne un lien
   du type `https://tresor-jcf-xxxx.vercel.app` — c'est ton app, en ligne.

### Option B — Avec la commande Vercel (si tu as Node.js installé)
Depuis ce dossier, dans un terminal :
```
npm install -g vercel
vercel --prod
```
Suis les instructions à l'écran (connexion, puis confirmation du déploiement).

### Option C — Via GitHub
1. Crée un dépôt GitHub et mets-y les fichiers de ce dossier.
2. Sur vercel.com, clique **"Add New..." → "Project"**, puis **"Import"**
   depuis GitHub, et sélectionne ce dépôt.
3. Laisse les réglages par défaut (aucun "Build Command" n'est nécessaire,
   c'est un site 100% statique) et clique **Deploy**.

## Important à savoir

- **Les données sont propres à chaque navigateur.** Si tu utilises l'app sur
  ton téléphone puis sur ton ordinateur, ce sont deux "carnets" séparés.
  Utilise toujours le même appareil/navigateur pour la saisie du camp.
- **Aucune donnée n'est envoyée à un serveur externe.** Tout reste dans ton
  navigateur (stockage personnel), donc rien à configurer côté Vercel.
- Le fichier `index.html` est autonome (HTML + CSS + JS + favicon inclus) :
  tu peux aussi l'ouvrir directement en local (double-clic) sans passer par
  Vercel si tu préfères, mais le lien en ligne est plus pratique à partager
  avec d'autres personnes de l'équipe.
