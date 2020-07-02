let number1 = parseFloat(prompt('Escribe tu número'))
let number2 = parseFloat(prompt('Escribe tu número'))


const sumar = (n, s) =>{
    let resultado = n + s
    return parseFloat(resultado.toFixed(2))
}

alert(sumar(number1, number2))