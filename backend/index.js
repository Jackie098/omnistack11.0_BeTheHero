const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({
  event: 'Semana OmniStack 11.0',
  student: 'Carlos Augusto',
}));

app.listen(3333);