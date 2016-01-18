var Answer = require('../objects/Answer'),
    quizz = require('../services/quizz.service');

module.exports = function(app) {
    // Vues

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/revisions', function(req, res) {
        res.render('revisions', { capitals: quizz.getCapitals() });
    });

    app.get('/template', function(req, res) {
        res.render('template');
    });

    // API

    app.get('/api/questions', function(req, res) {
        res.json(quizz.getCapitals());
    });

    app.get('/api/quizz/next', function(req, res) {
        res.json(quizz.newQuestion());
    });

    app.post('/api/quizz/answer', function(req, res) {
        var answer = new Answer(req.body.login, req.body.country, req.body.userChoice);

        var score = quizz.answerQuestion(answer);
        res.json(score);
    });

};
