const express = require('express')

const routes = express.Router();

app.get('/', (req, res) => res.json({
  event: 'Semana OmniStack 11.0',
  student: 'Carlos Augusto',
}));

module.exports = routes;