let pizzaIncial = prompt("¿Qué cantidad de Pizzas trajiste?")
let pizzaConsumida = (1/3)*pizzaIncial
let pizzaConsumidaCompleta = pizzaConsumida.toFixed(0)

const imprimirPizzas = () =>{
    let pizzaFinal = pizzaIncial - pizzaConsumidaCompleta
    return alert(`Quedan ${pizzaFinal} comieron ${pizzaConsumidaCompleta}`)
}
imprimirPizzas()