require('dotenv').config()

//
// Condigurações do Postgre
//
// Adicionado segurança extra de dados, 
// colocando as credenciais do Postgres
// dentro do ambiente .env (criar arquivo .env usando o model.env)
//
/////////////////////////////////////
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

// Iniciar servidor
server.listen(port, function(a,b,c){
    console.log('\n\n---------------------------------')
    console.log(`Servidor rodando na porta ${port}`)

})

//
//  Apresenta os últimos doadores na página
//
//  Atualizações:
//      1. ordem descendente por inclusão, ou seja apresenta do 
//      cadastro mais recente, para o mais antigo
//
//      2. limite para apresentar os 12 últios cadastros (3 linhas)
//
//      3. await e catch error
////////////////////////////////////////////////////////////////////////////
server.get('/', async (req, res, next) => {
        await db.query('select * from donors order by id desc limit 12', function(err, result) {
            if (err) {
                console.log(`!!! ${err}`)
                return res.status(400).send(`<b>deu ruim:</b> ${err}`)
            } else {
                var donors = result.rows
                return res.render('index.html', { donors })
            }
        })
})



//
//  Insere novo cadastro no DB
//
//  Atualizações:
//      1. await e catch error
//
//
////////////////////////////////////////////////////////////////////////////
server.post('/', async (req,res,next) => {
    var name = req.body.name 
    var blood = req.body.blood
    var email = req.body.email
    var query = `insert into donors ("name","blood","email") values ('${name}','${blood}','${email}')`
    if (name,blood,email ==""){
        res.send(`<b>Erro ao inserir dados<b> ${err}`)
    }
    await db.query(query, function(err){
        if (err) {
            return res.send(`<b>Erro ao inserir dados<b> ${err}`)
        } else {
            return res.redirect('/')
        }})
})