var Todos = require('../models/todoModels');

module.exports = function (app) {

    app.get('/api/setupTodos', function (req, res) {

        //seed database
        var starterTodos = [{
                username: 'sean',
                todo: 'STOP THIS 1',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'sean',
                todo: 'STOP THIS 2',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, result) {
            res.send(result);
        })

    })

}