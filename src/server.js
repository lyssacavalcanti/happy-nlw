//Importar dependências
const express = require('express');
const path = require('path');

// Iniciando express
const server = express()
server

// Utilizando arquivos estáticos 
.use(express.static('public'))

// Configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// Rotas de aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


// Ligar servidor
server.listen(5500)