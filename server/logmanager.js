module.exports = {
	readLogs(query) {
		return new Promise((resolve) => {
	 		resolve(query + " and server data");
	 	});
	},
}