const Manager = require('./manager');

module.exports = class LogManager extends Manager {
  constructor(app) {
	super();

	app.get('/logs/*', (req, res) => {
		this.respond(res, this.readLogs(this.getParam(req, 2)));
	});
  }

  readLogs(param) {
	return `${decodeURIComponent(param)} and server data`;
  }
}