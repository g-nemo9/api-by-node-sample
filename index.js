const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello'));

app.get('/api/v1/list', (req, res) => {
  const todoList = [
    { title: 'JavaScriptを勉強する', done: true },
    { title: 'Node.jsを勉強する', done: false },
    { title: 'Web APIを作る', done: false }
  ];
  console.log(todoList);
  console.log(typeof todoList);
  // JSONを送信する
  res.json(todoList);
});

app.listen(3000, () => console.log('Listening on port 3000'));
