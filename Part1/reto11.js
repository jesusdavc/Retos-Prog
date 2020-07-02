let valor1 = parseFloat(prompt('Inserte un valor entre 1 - 1000'))
let valor2 = parseFloat(prompt('Inserte un valor entre 1 - 100'))

const imprimir = () => {
    if(valor1 <= 1000 && valor2 <= 100 ){
        let resultado = valor1/valor2
        alert(`El valor ${valor2} entra ${resultado.toFixed(0)} veces en ${valor1}`)
    }
    else{
        alert('Inserte valores correspodientes')
    }
}

imprimir();