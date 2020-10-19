//Importar dependências
const express = require('express');

// Iniciando express
const server = express()

// Criar rota
server.get('/', () => {
    console.log('oi')
})

// Ligar servidor
server.listen(5500)