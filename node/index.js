const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'coursesdb'
}


const mysql = require('mysql')
const connection = mysql.createConnection(config)

let nomes = [];

connection.query("SELECT * FROM module", function(error, result, fields){
    if(error) return error;

    result.forEach(element => {
        nomes.push(element.name + '<br>');            
    });
})

app.get('/', (req, res) => {
    res.send('<h1>Módulos: </h1><br>' + nomes)
})

connection.end()

app.listen(port, () => {
    console.log('Rodando na porta' + port)
})