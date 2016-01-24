# Coding dojo Quizz Node.js

# User Story #7 : Notifications lorsque d'autres utilisateurs jouent

### Objectif technique : comprendre les bases des WebSockets.

1. Installez le module socket.io
2. Dans server.js, prenez connaissance de l'initialisation de la variable io.
3. Dans le controller quizz api, émettez un message pour indiquer si l'utilisateur a bien répondu ou non. Le message
doit avoir pour clé "new_answer" et être une structure json du type { login: <login>, isCorrect: <boolean> }
4. Côté client, dans layout.html, incluez la librairie socket.io-client/socket.io.js.
5. Enfin dans la méthode initNotifications du controller Angular (public/controllers/quizz.controler.client.js), abonnez 
vous aux notifications "new_answer" et mettez à jour le header de la page web.

Pour info, grâce à Angular, le header est déjà "bindé" sur 2 variables du controller côté client : newSuccessAnswer et newFailAnswer.
