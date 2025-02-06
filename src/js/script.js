const switchThema = document.querySelector('#thema-page')
switchThema.addEventListener('click', () =>{
    const img = document.querySelector('.profile img')
    
    document.body.classList.toggle("light")

    if (document.body.classList.contains('light')) {
        img.setAttribute('src', './src/assets/mobl.jpg')
    }else{
        img.setAttribute('src', './src/assets/perfil.jpg')
    }
})