# Coding dojo Quizz Node.js

# User Story #3 : Gestion des scores de l'utilisateur

Dans cette story, nous allons implémenter la gestion des scores de l'utilisateur. 
Les scores seront stockés en mémoire (simple variable globale dans le service des scores).

Objectif technique : comprendre les bases des tests et du TDD

1. Créer un fichier score.service.test.js et créer la structure de base des tests avec l'opérateur "describe".
2. Pour chacun des cas de tests ci-dessous, suivez les indications suivantes :
	1. créer le test reproduisant le cas
	2. lancer le test et vérifier qu'il est en erreur
	3. modifier le code du service pour implémenter le cas de test
	4. lancer le test et vérifier qu'il est en succès
	5. améliorer le code du service si nécessaire
	6. lancer le test et vérifier qu'il est toujours en succès

Quelques indications pour écrire les tests :
- Lorsqu'on teste une méthode asynchrone, on peut utiliser le callback done(err) pour indiquer que le test est terminé
- Afin de remettre à 0 les scores après chaque tests, il faut utiliser l'instruction beforeEach pour initialiser le service.
- Si vous initialisez le service avec require, le même objet sera envoyé à chaque fois car il est mis en chache. Vous pouvez
donc utiliser le module rewire à la place pour inhiber ce comportement.

Les cas de tests à implémenter :

- la réponse de l'utilisateur est correcte
- la réponse de l'utilisateur n'est pas correcte
- l'utilisateur répond à 1 question correcte et 1 question incorrecte
- 2 utilisateurs répondent à plusieurs questions

Utilisons désormais notre gestion des scores dans le quizz :

1. Dans la méthode answerQuestion du service de quizz, utiliser le service de score pour mettre à jour le score puis
renvoyer le score de l'utilisateur en suivant la documentation de la méthode answerQuestion.
2. Démarrer le serveur avec Gulp et assurez vous que les scores de l'utilisateur sont affichés dès la première réponse
au quizz.
