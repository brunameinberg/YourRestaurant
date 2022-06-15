document.addEventListener('DOMContentLoaded', function() {


    perfil = document.querySelector('.perfil2')

    perfil.innerHTML = localStorage.getItem('nome')


    endereco = document.querySelector('.text3')
    
    endereco.innerHTML = localStorage.getItem('Endereco')
})