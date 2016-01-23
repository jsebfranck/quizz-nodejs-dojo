# Coding dojo Quizz Node.js

# User Story #5 : Sauvegarder dans le temps les scores de l'utilisateur

Objectif technique : Interragir avec une base de données Nosql

1. Installer redis sur votre poste et démarrer le serveur redis.
2. Utiliser l'API de redis pour stocker le score des utilisateurs :

Deux types de données Redis vont nous être utiles pour stocker les scores : les Sets (http://redis.io/commands#set) et
les Hashes (http://redis.io/commands#hash).

Nous allons stocker la liste des utilisateurs dans un Set qui s'appelle "users" (On pourrait s'en passer pour le moment
mais nous en aurons besoin dans l'atelier suivant).

Puis nous allons stocker le score des utilisateurs dans un Hash avec comme clé le login de l'utilisateur, en champ soit
"questions", soit "success" et en value le nombre de questions.

Afin de faire le moins d'opération possible dans Redis, lisez attentivement la documentation des commandes pour utiliser
la commande la plus appropriée. Vous pouvez vous familiariser avec les commandes en les utilisant directement dans la
console de Redis.
