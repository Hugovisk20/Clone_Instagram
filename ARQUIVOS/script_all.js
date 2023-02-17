//SCRIPT ESCONDER/MOSTRAR PESQUISA
let navPesquisa = document.getElementById('navPesquisa');
function abrePesquisa(){
    if(navPesquisa.classList.contains('o')){
        navPesquisa.style.transform = 'translateX(-300px)';
        navPesquisa.classList.remove('o');
        retornaNav();
    }else{
        navPesquisa.classList.add('o');
        navPesquisa.style.transform = 'translateX(50px)';
        retraiNav();
    }
}

//SCRIPT MOSTRA/ESCONDE NOTIFICAÇÕES
let navNotificacao = document.getElementById('navNotificacao');
function abreNotificacao(){
    if(navNotificacao.classList.contains('o')){
        navNotificacao.style.transform = 'translateX(-300px)';
        navNotificacao.classList.remove('o');
        retornaNav();
    }else{
        navNotificacao.classList.add('o');
        navNotificacao.style.transform = 'translateX(50px)';
        retraiNav();
    }
}

//FUNÇÕES NAV
let navMenu = document.getElementById('navMenu');
function retornaNav(){
    navMenu.classList.remove('transformTeste');
    navMenu.style.width = '220px';
}
function retraiNav(){
    navMenu.classList.add('transformTeste');
    navMenu.style.width = '50px';
}