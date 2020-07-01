let categorias = ['Desarrollo e Ingenería' , 'Marketing', 'Negocios', 'Diseño UX/UI', 'Producción Audio Visual', 'Desarrollo Profesional']

const imprimir = () =>{
    console.log('Platzi tiene cursos de:')
    for (let i = 0; i < categorias.length; i++) {
        console.log(categorias[i])
}
}
imprimir()