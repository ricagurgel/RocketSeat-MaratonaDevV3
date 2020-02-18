require('dotenv').config()

//postgre
const { Pool } = require('pg') 
const db = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DB
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
var donors = [
    {   name: "ops!",
        blood: ""
    }
]



// Iniciar servidor
server.listen(port, function(a,b,c){
    console.log('\n\n---------------------------------')
    console.log(`Servidor rodando na porta ${port}`)

})


// Apresentar página (no caso, renderiza a index.html, usando nunjucks)
server.get('/', function (req, res, next) {
    db.query('select * from donors', function(err,result){
        if(err) {res.send('erro no db')} 
        var donors = result.rows
        return res.render('index.html', { donors })
    })

})


server.post('/', function (req,res,next){
    
    var name = req.body.name 
    var blood = req.body.blood
    var email = req.body.email
    if (name,blood,email ==""){
        console.log('não pode estar vazio')
        return res.send('Todos campos são obrigatórios')
    }
    var  query = `insert into donors ("name","blood","email") values ('${name}','${blood}','${email}')`
    db.query(query, function(err){
        if (err) return res.send('erro no banco de dados')
    })
    donors.push({
        name: name,
        blood: blood
    })

    return res.redirect('/')

})