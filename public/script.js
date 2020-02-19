document 
    .querySelector('header button')
    .addEventListener("click", function() {
        document.querySelector('.form')
        .classList.toggle('hide')
    })

function getFocus(name) {
    // 
    // importante saber !!
    // Essa função joga o cursos no campo do formulário
    // desejado. Porém, como existe uma transição de 300ms
    // para apresentar o form, é necessário
    // colocar um seTimeout (que é um timer) para que o 
    // focus() seja executado só após o form aparecer.
    //
    // !!!importante!!! Como o javascript é uma aplicação
    // não bloqueante, é necessário que tudo que você
    // deseja pausar esteja dentro de uma função do
    // SetTimeout() "veja: function (){... script ...}"
    // caso contrário o setTimeout() não terá poder de 
    // controlar a execução do focus()
    //
    ///////////////////////
    setTimeout(
        function () {
            document.getElementById(name).focus()
        }
        , 350);
}

function validateForm() {
    var name = document.forms["myform"]["name"].value;
    var email = document.forms["myform"]["email"].value;
    var blood = document.forms["myform"]["blood"].value;
    console.log(name)
    if (name == "" || name == null) {
        alert("Todos os campos são obrigatórios");
        return false;
    }
}
    
