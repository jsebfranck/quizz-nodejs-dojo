# Coding dojo Quizz Node.js

# User Story #2 : Afficher une version web du quizz

### Objectif technique : comprendre les bases de Express.js

La configuration de base d'Express se trouve dans le fichier server.js. L'objectif est de la faire évoluer pour
afficher le quizz.

Commençons par configurer le serveur :

1. Installez les librairies côté client (Angular.js, Bootstrap etc). Pour cela lancez la commande "bower install". La  commande
"bower" s'installe avec "npm install -g bower".
2. En une seule commande, installez les dépendances "express" et "body-parser" et mettez à jour le fichier package.json
3. Dans server.js, configurez l'application express pour qu'elle démarre sur le port 3000, puis affichez un message 
indiquant que le serveur est démarré
4. Démarrez le serveur avec la commande "gulp". Cette commande s'installe avec "npm install -g gulp". Gulp est configuré
pour utiliser le plugin "nodemon". Désormais toutes les modifications que vous faites dans le code sont automatiquement
prises en compte par le serveur.
5. Consultez l'url http://localhost:3000 dans votre navigateur. Rien ne s'affiche, c'est normal car vous n'avez configuré
aucune route.

Affichons désormais le quizz : 

1. Dans app/controllers/quizz.views.controller.js, créez une route GET sur l'url / pour affichez la vue "index"
2. Dans app/controllers/quizz.controller.js, créez une route GET sur l'url /api/quizz/next pour affichez le résultat
de la méthode getNewQuestion du service de quizz
3. Consultez l'url http://localhost:3000 dans votre navigateur. La première question du quizz doit s'afficher.

Rendons désormais le quizz fonctionnel :

1. Dan app/controllers/quizz.controller.js, créez une route POST sur l'url /api/quizz/answer pour permettre à l'utilisateur
de répondre au quizz. Utilisez la classe Answer et la méthode answerQuestion du service du quizz. 
2. Consultez l'url http://localhost:3000 dans votre navigateur. Vous pouvez déjà commencer à jouer.

Affichons enfin la page de révision du quizz :

1. Dans app/controllers/quizz.views.controller.js, créez une route GET sur l'url /revisions pour affichez la vue "revisions"
2. Dans la même méthode, récupérez la liste des capitales à partir de la méthode getCapitals du service du quizz et passez
la liste des capitales dans le contexte de la réponse.
3. Enfin, dans app/views/revisions.html, utilisez le templating swig pour affichez la liste des capitales
4. Consultez l'url http://localhost:3000 dans votre navigateur. La v0 du quizz est prête !
