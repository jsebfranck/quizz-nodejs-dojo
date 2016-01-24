# Coding dojo Quizz Node.js

# User Story #4 : Utilisation du référentiel des capitales

### Objectif technique : interagir avec une API HTTP distante

1. Démarrez le serveur de référentiel des capitales à l'aide de la commande "node serverCapitals.js". Ce serveur
est désormais accessible dans votre navigateur sur cette url : http://localhost:4000/capitals.
2. Installez le module request dans les dépendances principales, puis le module nock dans les dépendances de développement
3. Dans les tests du service des capitales, créez un test qui appelle la méthode getCapitals puis affiche les résultats
4. Dans le service des capitales, utilisez le module request pour faire une requête GET vers le serveur distant et renvoyer les capitales
5. Eteignez le serveur de référentiel puis relancez le test. Il doit être en erreur.
6. Relancez le serveur de référentiel. Utilisez le recorder du module nock dans le test puis relancez le test. 
7. Dans la console, copiez le retour de nock et collez le dans votre test.
8. Coupez le serveur de référentiel puis relancez le test. Il doit désormais être en succès.

Félicitations, vous avez simulé un serveur distant dans votre test !

1. Créez un nouveau test et modifiez la réponse simulée par nock pour envoyer un code HTTP en erreur
2. Faites en sorte que getCapitals renvoie une erreur dans le callback dans ce cas là.

Et pour terminer cet atelier : 

1. Créez un nouveau test et modifiez la réponse simulée par nock pour simuler un timeout.
2. Faites en sorte que getCapitals renvoie une erreur dans le callback dans ce cas là.
