var path = require('path');
var logManager = require('./logmanager');

module.exports = function(app, callback) {
	app.get('/logs/*', function(req, res) {
		var query = req.url.split('/')[2];

		logManager.readLogs(query, function(logLines) {
			res.end(JSON.stringify(logLines));
		});
	});

	callback();
}