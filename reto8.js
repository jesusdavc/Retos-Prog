let personas = parseFloat(prompt('¿Cuántas personas son?'))
let totalaPagar = parseFloat(prompt('Total sin IVA y propina'))
let propina = parseFloat(prompt('¿Cuanto desea dejar de propina? Y ensegida le traemos la cuenta'))
const dividirCuenta = () => {
    let iva = totalaPagar * 12/100
    let totalNeto = totalaPagar + iva + propina
    let dineroPorPersona = totalNeto/personas

    console.log(`Su cuenta es ${totalNeto} $`)
    console.log(`Correspomdiente de iva ${iva}$`)
    console.log(`Propina ${propina}$`)
    console.log(`Y cada persona paga ${dineroPorPersona}$`)
}

    dividirCuenta()