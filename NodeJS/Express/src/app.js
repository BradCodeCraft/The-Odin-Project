const path = require('path');
const express = require('express');
const app = express();
const PORT = 8080;

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, '../public');
app.use(express.static(assetsPath));

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
];
const users = ['Alice', 'Bob', 'Charlie'];
app.get('/', function(req, res) {
  res.render('index', { links: links, users: users });
})

app.listen(PORT);
