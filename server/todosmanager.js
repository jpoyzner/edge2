// consider using LowDB for this instead: https://github.com/typicode/lowdb
const cache = require('memory-cache');
const Manager = require('./manager');

module.exports = class TodosManager extends Manager {
	constructor(app) {
		super();

		cache.put(
			'todos',
			['clean up', 'get food', 'take a nap'],
		);

		app.get('/todos/*', (req, res) => this.respond(res, this.getTodos()));

		app.get('/removetodo/*', (req, res) => {
			const todos = this.removeTodo(this.getParam(req, 2));
			this.respond(res, todos);
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