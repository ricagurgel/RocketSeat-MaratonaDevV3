//
//
// Aprenda a desestruturar objetos "ES6"
//
////////////////////////

const cor="verde"
const sujo=false

function copoSujo(par) {
    var {cor,sujo} = par
    if(sujo) {sujo="SUJO"} else sujo="LIMPO"
    return (`O Copo ${cor} está ${sujo}`)
}


const copo = {
    cor,
    sujo
}

console.log(copoSujo(copo))