var path = require('path');
var logManager = require('./logmanager');
var todosManager = require('./todosmanager');

module.exports = (app) => {
	app.get('/logs/*', function(req, res) {
		var query = req.url.split('/')[2];

		logManager.readLogs(query).then((logLines) => {
			res.end(JSON.stringify(logLines));
		});
	});

	app.get('/todos/*', (req, res) => {
		todosManager.getTodos().then((todos) => {
			res.end(JSON.stringify(todos));
		});
	});

	app.get('/removetodo/*', (req, res) => {
		const index = req.url.split('/')[2];
		todosManager.removeTodo(index).then((todos) => {
			res.end(JSON.stringify(todos));
		});
	});

	return new Promise((resolve) => {
		resolve();
	});
}