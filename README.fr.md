# Coding dojo Quizz Node.js

# User Story #2 : Afficher une version web du quizz

### Objectif technique : comprendre les bases de Express.js

La configuration de base d'Express se trouver dans le fichier server.js. L'objectif est de la faire évoluer pour
afficher le quizz.

Commençons par configurer le serveur :

1. Installer les librairies côté client (Angular.js, Bootstrap etc). Pour cela lancer la commande "bower install". La  commande
"bower" s'installe avec "npm install -g bower".
2. En une seule commande, installer les dépendances "express" et "body-parser" et mettez à jour le fichier package.json
3. Dans server.js, configurer l'application express pour qu'elle démarre sur le port 3000, puis afficher un message 
indiquant que le serveur est démarré
4. Démarrer le serveur avec la commande "gulp". Cette commande s'installe avec "npm install -g gulp". Gulp est configuré
pour utiliser le plugin "nodemon". Désormais toutes les modifications que vous faites dans le code sont automatiquement
prises en compte par le serveur.
5. Consulter l'url http://localhost:3000 dans votre browser. Rien ne s'affiche, c'est normal car vous n'avez configuré
aucune route.

Affichons désormais le quizz : 

1. Dans app/controllers/quizz.views.controller.js, créer une route GET sur l'url / pour afficher la vue "index"
2. Dan app/controllers/quizz.controller.js, créer une route GET sur l'url /api/quizz/next pour afficher le résultat
de la méthode getNewQuestion du service de quizz
3. Consulter l'url http://localhost:3000 dans votre browser. La première question du quizz doit s'afficher.

Permettons désormais de répondre au quizz :

1. Dan app/controllers/quizz.controller.js, créer une route POST sur l'url /api/quizz/answer pour permettre à l'utilisateur
de répondre au quizz. Utiliser la classe Answer et la méthode answerQuestion du service du quizz. 
2. Consulter l'url http://localhost:3000 dans votre browser. Vous pouvez déjà commencer à jouer.

Affichons enfin la page de révision du quizz :

1. Dans app/controllers/quizz.views.controller.js, créer une route GET sur l'url /revisions pour afficher la vue "revisions"
2. Dans la même méthode, récupérer la liste des capitales à partir de la méthode getCapitals du service du quizz et passer
la liste des capitales dans le contexte de la réponse.
3. Enfin, dans app/views/revisions.html, utiliser le templating swig pour afficher la liste des capitales
4. Consulter l'url http://localhost:3000 dans votre browser. La v0 du quizz est prête !
