const toggleMode = () =>{
    const body = document.body
    const img = document.querySelector('.profile img')

    body.classList.toggle("light")

    if (body.classList.contains('light')) {
        img.setAttribute('src', './src/assets/mobl.jpg')
    }else{
        img.setAttribute('src', './src/assets/perfil.jpg')
    }

}