const PORT = 8080;

const express = require('express');
const app = express();
const Controller = require('./server/controller')

app.listen(PORT, () => {
  new Controller(app);
  console.log("Server listening on: http://localhost:" + PORT);
});