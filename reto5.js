let number1 = parseFloat(prompt('Escribe tu número'))
let number2 = parseFloat(prompt('Escribe tu número'))
let number3 = parseFloat(prompt('Escribe tu número'))


const sumar = (n1, n2, n3) =>{
    let resultado = n3*(n1+n2)
    return parseFloat(resultado.toFixed(2))
}

alert(sumar(number1, number2, number3))