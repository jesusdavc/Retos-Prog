let personas = parseFloat(prompt('¿Cuántas personas son?'))
let totalaPagar = parseFloat(prompt('Total sin IVA y propina'))
let propina = parseFloat(prompt('¿Cuanto desea dejar de propina? Y ensegida le traemos la cuenta'))
const dividirCuenta = () => {
    let iva = totalaPagar * 12/100
    let totalNeto = totalaPagar + iva + propina
    let dineroPorPersona = totalNeto/personas

    alert(`Su cuenta es ${totalNeto} $`)
    alert(`Correspomdiente de iva ${iva}$`)
    alert(`Propina ${propina}$`)
    alert(`Y cada persona paga ${dineroPorPersona}$`)
}

    dividirCuenta()