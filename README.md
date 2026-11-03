# Trésor JCF (version Supabase)

Un seul lien pour tout le monde, installable comme une application sur téléphone.

- **Toi (trésorier, admin)** : accès complet (membres, cotisations, dons, dépenses, solde).
- **Bureau** : connecté, voit seulement la liste des membres **à jour / en retard** (aucun montant, aucun solde).
- **Tout le monde, sans compte** : "Qui est à jour ?" (liste publique : 10 noms à la fois, "voir plus", "tout charger", filtre à jour / en retard, recherche par nom), "M'inscrire", "Connexion".

## Mise en place
1. Supabase : exécuter dans l'ordre `01-supabase-schema.sql`, `02-supabase-suite.sql`, `03-supabase-liste-publique.sql`, `04-supabase-acces.sql` puis `05-supabase-paiements-declares.sql` (SQL Editor).
2. Supabase → Authentication → Sign In / Providers → Email : **désactiver « Confirm email »** (on se connecte avec un numéro de téléphone, aucun email n'est envoyé). Puis créer ton compte depuis la page de connexion du site (« Créer un compte », avec ton numéro) et te donner le rôle admin (dernière ligne du fichier 01).
3. `config.js` contient le Project URL et la clé anon. Quand ton compte est créé, mettre `SIGNUP_OPEN = false` et désactiver « Allow new users to sign up » dans Supabase (Authentication → Sign In / Providers).
4. Déployer sur Vercel (glisser-déposer le dossier).
5. Se connecter, puis Paramètres → Sauvegarde de secours → importer l'ancien fichier JSON.

## Important
- La clé "service_role" ne doit jamais être dans ce dossier.
- Les données sont enregistrées en ligne : connexion internet nécessaire pour enregistrer.
- Un autre appareil voit les changements après rechargement de la page (les inscriptions en attente se rafraîchissent toutes les 30 secondes).

## Liens à partager (Paramètres)
- `/inscription` : ouvre directement le formulaire d'inscription (à envoyer dans le grand groupe).
- `/situation` : ouvre la liste publique « Qui est à jour ? ».

## Connexion par numéro de téléphone
- On tape son numéro (8 chiffres) + un mot de passe. En coulisse le site fabrique l'identifiant technique `22670123456@jcf-tresor.app` : aucun email n'est jamais envoyé.
- Les membres simples n'ont **pas de compte** : ils s'inscrivent (nom, prénom, téléphone, groupe) et regardent la liste publique.
- Mot de passe oublié : se changer depuis Paramètres tant qu'on est connecté. Sinon, Supabase → SQL Editor :
  `update auth.users set encrypted_password = extensions.crypt('NouveauMotDePasse', extensions.gen_salt('bf')) where split_part(email,'@',1) like '%70123456';`

## Début de la collecte
- Au départ, le mois de départ n'est **pas défini** : personne n'est compté en retard et la liste publique n'affiche pas de statut.
- Paramètres → « Début de la collecte » : tu choisis le mois **et l'année** (ex. Décembre 2026). Les retards sont comptés à partir de ce mois, jamais avant. Tu peux le changer ou le remettre à « pas défini ».

## « J'ai payé » et rappels
- Un membre touche son nom dans la liste publique, indique le montant payé (et le code SMS, facultatif) : la déclaration arrive dans Cotisations → « Paiements déclarés à vérifier ». Rien n'est compté tant que tu n'as pas validé.
- Après sa déclaration, un bouton WhatsApp s'ouvre vers ton numéro (réglé dans Paramètres) avec le message déjà écrit.
- Cotisations → « Rappeler ceux qui ne sont pas à jour » : un seul message pour le grand groupe (avec ou sans les noms), ou un message personnel à chacun, un par un.

## Réveil quotidien de la base (offre gratuite Supabase)
- `api/keepalive.js` + la tâche « crons » de `vercel.json` appellent la base une fois par jour pour qu'elle ne soit jamais mise en pause.
- Rien à faire : ça démarre tout seul après le déploiement sur Vercel (Vercel → ton projet → Settings → Cron Jobs pour vérifier).

## Archiver, merci WhatsApp, import de membres
- **Archiver** un membre (au lieu de le supprimer) : il disparaît des listes et n'est plus compté en retard, mais ses paiements restent. « Voir les archivés » permet de le restaurer ou de le supprimer pour toujours.
- **Merci WhatsApp** : après un paiement enregistré (ou une déclaration validée), un bouton ouvre WhatsApp avec le message de remerciement prêt.
- **Importer des membres** (Cotisations → « Importer une liste de membres ») : fichier Excel ou CSV avec les titres Nom, Prénom, Téléphone, Groupe (Rôle, Poste, Date d'adhésion en option). Un modèle est téléchargeable, et tu vois le résultat avant de confirmer.
