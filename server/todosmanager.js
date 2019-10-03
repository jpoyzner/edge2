// consider using LowDB for this instead: https://github.com/typicode/lowdb
const cache = require('memory-cache');

module.exports = class TodosManager {
	constructor(app) {
		cache.put(
			'todos',
			['clean up', 'get food', 'take a nap'],
		);

		app.get('/todos/*', (req, res) => {
			res.end(JSON.stringify(this.getTodos()));
		});

		app.get('/removetodo/*', (req, res) => {
			const param = req.url.split('/')[2];
			const todos = this.removeTodo(param);
			res.end(JSON.stringify(todos));
		});
	}

	getTodos() {
		return cache.get('todos');
	}

	removeTodo(index) {
 		const todos = cache.get('todos');
 		todos.splice(index, 1);
 		cache.put('todos', todos);
 		return todos;
	}
}