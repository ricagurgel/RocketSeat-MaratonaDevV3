// Configurar servidor
const express = require('express')
const server = express()
port = process.env.PORT || 3000

// incluir os arquivos que estão na pasta "Public" como 
// arquivos que estarão acessiveis na raiz do servidor.
//
//
// Obs.: Originalmente o express só dá acesso as páginas .html
//       por isso a necessidade de colocar todos os outros arquivos
//       em uma pasta qualquer e dizer ao express que essa pasta é
//       onde estará os arquivos "não html", ou ".static" (arquivos estáticos)
//       (imagens, css, .js, etc)
//
//////////////////////////////////////////
server.use(express.static('public'))

//
// incluir o conteúdo html do BODY no express,
// para que se possa pegar os dados da página (exemplo: formulários) nos requests
//
//////////////////////////////////////////////////////////////////////////////////////
server.use(express.urlencoded({extendend: true}))

//
// configurar o pacote "nunjucks" para funcionar como sistema de template (template engine)
// com isso, os comandos do nunjucks poderam ser colocando dentro das páginas html e agora
// o sistema "nunjucks" fara os processamentos desses comandos para se devolver nas páginas
// .html tudo que se precisa.. por exemplo, mostrar dados que serão passados aqui do node
// definir páginas de template, etc.
//
////////////////////////////////////////////////
const nunjucks = require('nunjucks')
nunjucks.configure('./', {
    express: server,
    noCache: true // faz com que o servidor ignore qualquer chache e busque as páginas .html direto do servidor
})

//
// Este array é apenas para aprendizado.
// e server apenas para simular o que seria um banco de dados
// só que no caso, é apenas um objeto array que está apenas na memória, ou seja,
// sempre que reiniciado tudo será perdido, voltado a essa configuração inicial
//
// A partir do "master" as coisas funcionam em cima de um banco de dados
//
//
/////////////////////////////////////////////////
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

//
// Apresentar página (no caso, renderiza a index.html *usando nunjucks)
//
/////////////////////////////////////////////////////////////////////////
server.get('/', function (req, res, next) {
    return res.render('index.html', { donors })
})

//
// quando o formulário "post" é enviado para "/"
// é aqui que vem parar. No caso, pegamos todos os dados do formulário (req.body.nome_do_campo_do_form)
// e colocamos dentro do array "donors" (donors.push)
//
////////////////////////////////////////////////
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