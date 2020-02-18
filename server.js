require('dotenv').config()

//postgre
const pool = require('pg').Pool 
const db = new pool({
    user: process.env.dbuser,
    password: process.env.dbpass,
    host: process.env.dbhost,
    port: process.env.dbport,
    database: process.env.dbdb
})

// Configurar servidor
const express = require('express')
const server = express()
port = process.env.PORT || 3000

// incluir arquivos "não html" no server (imagens, css, .js, etc) 
server.use(express.static('public'))

// incluir html.BODY no nunjucks
server.use(express.urlencoded({extendend: true}))

//configurar template
const nunjucks = require('nunjucks')
nunjucks.configure('./', {
    express: server,
    noCache: true
})

// Isto é um  Array
const donors = [
    {   name: "Flavio Gurgel",
        blood: "O+"
    },
    {   name: "Marta Suplici",
        blood: "A+"
    },
    {   name: "Muricy Santana",
        blood: "AB+"
    },
    {   name: "Miguel Fernandes",
        blood: "A+"
    },
]



// Iniciar servidor
server.listen(port, function(a,b,c){
    console.log('\n\n---------------------------------')
    console.log(`Servidor rodando na porta ${port}`)

})


// Apresentar página (no caso, renderiza a index.html, usando nunjucks)
server.get('/', function (req, res, next) {
    return res.render('index.html', { donors })
})


server.post('/', function (req,res,next){
    var name = req.body.name
    var blood = req.body.blood
    var email = req.body.email
    donors.push({
        name: name,
        blood: blood
    })

    return res.redirect('/')

})