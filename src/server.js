//Importar dependências
const express = require('express');
const path = require('path');

// Iniciando express
const server = express()
server

// Utilizando arquivos estáticos 
.use(express.static('public'))

// Criar rota
.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// Ligar servidor
server.listen(5500)