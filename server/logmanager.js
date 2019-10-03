module.exports = class LogManager {
	constructor(app) {
		app.get('/logs/*', (req, res) => {
			const param = req.url.split('/')[2];
			const logLines = this.readLogs(param);
			res.end(JSON.stringify(logLines));
		});
	}

	readLogs(param) {
		return `${decodeURIComponent(param)} and server data`;
	}
}