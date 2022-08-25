const express = require('express');
const path = require('path');
const LogManager = require('./logmanager');
const TodosManager = require('./todosmanager');

module.exports = class Controller {
  constructor(app) {

  	app.use(function (req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
    	next();
		});

		app.use(express.static(path.join(__dirname, '../build')));

		app.get('/', (req, res) => {
		  res.sendFile(path.join(__dirname, '../build/index.html'));
		});

		new LogManager(app);
		new TodosManager(app);
  }
}