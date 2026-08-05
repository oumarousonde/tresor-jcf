# Trésor JCF

Application de trésorerie JCF (cotisations, dons, dépenses), synchronisée
en temps réel entre tous les appareils via Firebase (Firestore + Authentication).

## Déployer sur Vercel
1. Va sur https://vercel.com, connecte-toi.
2. "Add New..." → "Project" → glisse-dépose le dossier `tresor-jcf-vercel`.
3. Clique **Deploy**.

## Important
- Connexion via compte email/mot de passe créé dans Firebase Console (Authentication → Users).
- Les données sont synchronisées en temps réel entre appareils via Firestore.
- Connexion internet nécessaire au premier chargement.
