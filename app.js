const express = require('express');
const app = express();

app.use(express.json());

app.post('/update', (req, res) => {
  res.send('Hi ' + req.body.name + ' !!!');
});

app.use(express.static('build'));

module.exports = app;
