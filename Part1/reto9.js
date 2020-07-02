let dias = parseFloat(prompt('Inserte una cantidad de días'))

const imprimirHorasMinutosSegundos = () => {
    alert(`Su cantidad de días tiene ${dias * 24} horas, ${dias * 24 * 60} minutos ${dias * 24 * 60 * 60} segundos`)
}

imprimirHorasMinutosSegundos()