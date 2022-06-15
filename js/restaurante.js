document.addEventListener('DOMContentLoaded', function() {


    perfil = document.querySelectorAll('.perfil2')

    perfil[1].innerHTML = localStorage.getItem('nome')

    endereco = document.querySelector('.text3')
    if (localStorage.getItem('Endereco')== null){
    endereco.innerHTML = ' '
    }
    else{
        endereco.innerHTML =  '📍 Proximidades de:'+localStorage.getItem('Endereco');
    }

})