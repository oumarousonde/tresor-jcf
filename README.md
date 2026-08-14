# Trésor JCF

Un seul lien pour tout le monde, installable comme une application sur
téléphone. Ce que chacun voit dépend uniquement de son statut :

- **Toi (trésorier)** — connecté, accès complet
- **Bureau** (une fois son compte validé) — connecté, résumé en lecture seule
- **Tous les autres** — sans compte, écran d'accueil avec :
  "Vérifier ma situation" / "M'inscrire à la JCF" / "Connexion"

## Déployer sur Vercel
1. https://vercel.com → connecte-toi
2. "Add New..." → "Project" → glisse-dépose le dossier `tresor-jcf-vercel`
3. Deploy

## Important
- Connexion via compte email/mot de passe ou Google, créé par chacun puis validé par le trésorier (Paramètres → Accès du bureau, avec l'UID Firebase).
- Toutes les données sont synchronisées en temps réel via Firebase (Firestore).
- Connexion internet nécessaire.
