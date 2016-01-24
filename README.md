# Coding dojo Quizz Node.js

# User Story #6 : Afficher dans une page le score de tous les utilisateurs

Objectif technique : utiliser le module Q pour mieux gérer l'asynchronisme.

1. Installer le module Q dans le projet
2. Dans la méthode getAllScores du service de score, créer une promesse et résolver la avec des données statiques de score.
3. Dans le méthode getAllScore du service de quizz, appeler la méthode du service de score
4. Dans le controller quizz api, créer une route GET vers /api/quizz/scores et appeler la méthode getAllScore du service
de quizz.
5. Démarrer votre serveur et vérifier que vous voyez bien vos données statiques sur la page de scores.

Félicitations, vous avez créer une promesse. Maintenant on va récupérer les données de score directement dans Redis :

- Plusieurs commandes Redis sont nécessaires pour récupérer le score des utilisateurs. Vous devez d'abord récupérer
la liste des utilisateurs, puis récupérer le score de chacun des utilisateurs.
- Plutôt que d'utiliser l'api classique de redis, transformez les appels avec la méthode Q.nbind
- Pour récupérer le score de chacun des utilisateurs, utilisez la méthode Q.allSettled.

Astuce :
 
- Pour vous aider à débugger, vous pouvez lancer les tests du service des scores : "mocha app/tests/score*".
