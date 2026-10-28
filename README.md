# Portfolio Alexis Fourny — GitHub Pages

Version préparée pour le dépôt public `Alex-Frny/alex-frny.github.io`.

## Publication initiale

1. Créer le dépôt public `alex-frny.github.io` sur le compte Alex-Frny.
2. Autoriser la connexion GitHub de cette conversation à accéder à ce dépôt.
3. Envoyer les fichiers de ce dossier à la racine de la branche `main` (pas le ZIP).
4. Dans Settings → Pages, choisir **Deploy from a branch**, branche **main**, dossier **/docs**, puis Save.
5. Attendre le déploiement GitHub Pages avant d’utiliser l’adresse cible : https://alex-frny.github.io/

Les fichiers sont préparés pour une publication depuis main /docs. La disponibilité publique doit être vérifiée après activation de GitHub Pages. Le dossier `docs/` contient la version de production déjà compilée, le CV et les captures. Le fichier `docs/.nojekyll` permet de servir les fichiers directement.

## Modifier le portfolio

Les données sont dans `src/data/portfolio.js`, le style dans `src/styles.css`.

```sh
npm install
npm run dev
```

Après une modification, reconstruire la version Pages :

```sh
npm run build:pages
```

Publier les fichiers modifiés et le dossier `docs/` sur `main`. Aucun workflow personnalisé n’est nécessaire ; GitHub Pages se charge de servir ce dossier.

La commande build:pages remplace uniquement le dossier généré docs après vérification de son chemin. Ne placez pas de fichiers sources ou personnels dans docs ; utilisez public pour les ressources à publier.

Les variantes Braise / Or, Cendres / Parchemin, les galeries, les liens GitHub et le CV sont inclus. Les projets Go eux-mêmes ne sont pas hébergés par cette page statique.
