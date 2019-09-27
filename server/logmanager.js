module.exports = {
	readLogs(query) {
		return new Promise((resolve) => {
	 		resolve(decodeURIComponent(query) + " and server data");
	 	});
	},
}