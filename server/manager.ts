module.exports = class Manager {
  getParam(req, pathIndex) {
	return req.url.split('/')[pathIndex];
  }

  respond(res, data) {
	res.end(JSON.stringify(data));
  }
}