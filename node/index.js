const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'coursesdb'
}

app.get('/', (req, res) => {    
    const connection = mysql.createConnection(config)

    let nomes = [];

    connection.query("SELECT * FROM module", function(error, result, fields){        
        if(error) 
        {
            console.log('deu erro')
            console.log(error)
            return error;
        }
        
        result.forEach(element => {
            nomes.push(element.name + '<br>');
        });

        res.send('<h1>Módulos: </h1><br>' + nomes)        
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})