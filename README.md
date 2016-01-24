# Coding dojo Quizz Node.js

# User Story #6 : Afficher dans une page le score de tous les utilisateurs

### Objectif technique : utiliser le module Q pour mieux gérer l'asynchronisme.

1. Installez le module Q dans le projet
2. Dans la méthode getAllScores du service de score, créez une promesse et résolvez la avec des données statiques de score.
3. Dans le méthode getAllScore du service de quizz, appelez la méthode du service de score
4. Dans le controller quizz api, créez une route GET vers /api/quizz/scores et appelez la méthode getAllScore du service
de quizz.
5. Démarrez votre serveur et vérifiez que vous voyez bien vos données statiques sur la page de scores.

Félicitations, vous avez créer une promesse ! Maintenant récupérons les données de score directement dans Redis :

- Plusieurs commandes Redis sont nécessaires pour calculer le score des utilisateurs. Vous devez d'abord récupérer
la liste des utilisateurs, puis récupérer le score de chacun des utilisateurs.
- Plutôt que d'utiliser l'api classique de Redis, transformez les appels avec la méthode Q.nbind
- Pour récupérer le score de chacun des utilisateurs, utilisez la méthode Q.allSettled.

Astuce :
 
- Pour débugger, vous pouvez lancer les tests du service des scores : "mocha app/tests/score*".
