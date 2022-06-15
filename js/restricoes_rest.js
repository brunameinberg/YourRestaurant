document.addEventListener('DOMContentLoaded', function() {


    botao2 = document.querySelectorAll('.botao2')

    for (b of botao2){

        b.addEventListener('click', function(event) {

            t = event.currentTarget

            p = t.querySelector('p')

            localStorage.setItem('nome', p.innerHTML)

        })
    }

})