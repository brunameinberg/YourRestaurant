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
})