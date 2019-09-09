var cache = require('memory-cache');

cache.put(
	'todos',
	['clean up', 'get food', 'take a nap'],
);

module.exports = {
	getTodos() {
		return new Promise((resolve, reject) => {
	 		resolve(cache.get('todos'));
		});
	},
	removeTodo(index) {
		return new Promise((resolve, reject) => {
	 		const todos = cache.get('todos');
	 		todos.splice(index, 1);
	 		cache.put('todos', todos);
	 		resolve(todos);
		});
	},
}