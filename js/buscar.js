document.addEventListener('DOMContentLoaded', function() {


    text = document.querySelector('input[type="text"]')

    submit = document.querySelector('input[type="submit"]')

    submit.addEventListener('click', function(event) {
        
        texto = '📍 Proximidades de:' + text.value
        localStorage.setItem('Endereco', texto)
        window.location.replace("./restaurante.html");
        event.preventDefault()

    })
})