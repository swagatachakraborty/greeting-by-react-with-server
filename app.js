const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/update', (req, res) => {
  res.send('Hi ' + req.body.name + ' !!!');
});

app.use(express.static('client/build'));

module.exports = app;
