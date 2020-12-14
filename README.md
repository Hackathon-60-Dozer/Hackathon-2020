# Comment déployer l'API
Dupliquer le fichier `.env.dist` puis le renommer `.env`
Remplir **toutes** les variables d'environement

Executer la commande `yarn install` puis `yarn build`

Installer PM2: https://pm2.keymetrics.io/
puis faire la commande `pm2 stats dist/index.js`
