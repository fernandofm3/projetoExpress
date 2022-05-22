//Iniciando o Express
const express = require('express');
const app = express();
const path = require('path');

//Rota GET
app.get('/views', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

//Rota GET
app.get('/usuario', (req, res) =>{
    //res.send("Olá mundo!");
});

//Rota POST
app.get('/usuario', (req, res)=>{

});

//Rotas PUT
app.get('/usuaro/:id', (req, res)=>{

});

//Rota DELETE
app.get('/usuario/:id', (req, res)=>{

});

//Subindo o servidor
app.listen(3000, () =>{
    console.log('O Servidor esta em funcionamento.');
});

