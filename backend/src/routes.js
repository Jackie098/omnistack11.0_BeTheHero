const express = require('express')

const routes = express.Router();

routes.post('/ongs', (req, res) => {
  const data = req.body;

  console.log(data)

  return res.json();

});

module.exports = routes;