const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello world!'))

app.get('/conversa', (req, res) => res.send('Estou retornando uma conversa'))

app.listen(process.env.PORT || 3000)