const { write } = require('fs')
const { changeInfo, readInfo } = require('./counterReadWrite')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    changeInfo('/', 1);
    res.send(`<h1>Main</h1><br><a href="/about">About</a> Просмотров: ${readInfo('/')}`)
})

app.get('/about', (req, res) => {
    changeInfo('/about', 1);
    res.send(`<h1>About</h1><br><a href="/">Main</a> Просмотров: ${readInfo('/about')}`)
})

app.listen(3000);