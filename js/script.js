document.addEventListener('DOMContentLoaded', function() {
    profile = document.querySelector('.profile_ref')
    janela_profile = document.querySelector('.profile_janela')
    fechar = document.querySelector('body')

    profile.addEventListener('mouseover',function(event){
        janela_profile.style.display= 'block';
    })
    janela_profile.addEventListener('mouseover',function(event){
        janela_profile.style.display= 'block';
    })
    fechar.addEventListener('mouseout',function(event){
        janela_profile.style.display= 'none';
    })

    botao = document.querySelectorAll('.botao1')
    botao1 = botao[0]
    botao2 = botao[1]
    botao3 = botao[2]
    botao4 = botao[3]
    botao5 = botao[4]

    botao1.addEventListener('mouseover',function(event){
        botao1.style.backgroundColor = '#A2B54E';
    })
    botao1.addEventListener('mouseout',function(event){
        botao1.style.backgroundColor = '#f2f2f2';
    })
    botao2.addEventListener('mouseover',function(event){
        botao2.style.backgroundColor = '#A2B54E';
    })
    botao2.addEventListener('mouseout',function(event){
        botao2.style.backgroundColor = '#f2f2f2';
    })
    botao3.addEventListener('mouseover',function(event){
        botao3.style.backgroundColor = '#A2B54E';
    })
    botao3.addEventListener('mouseout',function(event){
        botao3.style.backgroundColor = '#f2f2f2';
    })
    botao4.addEventListener('mouseover',function(event){
        botao4.style.backgroundColor = '#A2B54E';
    })
    botao4.addEventListener('mouseout',function(event){
        botao4.style.backgroundColor = '#f2f2f2';
    })
    botao5.addEventListener('mouseover',function(event){
        botao5.style.backgroundColor = '#A2B54E';
    })
    botao5.addEventListener('mouseout',function(event){
        botao5.style.backgroundColor = '#f2f2f2';
    })
})
