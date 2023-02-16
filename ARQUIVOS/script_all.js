//SCRIPT ESCONDER/MOSTRAR PESQUISA
let navPesquisa = document.getElementById('navPesquisa');
function abrePesquisa(){
    if(navPesquisa.classList.contains('o')){
        navPesquisa.style.width = '0px';
        navPesquisa.classList.remove('o');
        retornaNav();
    }else{
        navPesquisa.classList.add('o');
        navPesquisa.style.width = '300px';
        retraiNav();
    }
}

let navMenu = document.getElementById('navMenu');
function retornaNav(){
    navMenu.style.width = '220px';
}
function retraiNav(){
    navMenu.style.width = '50px';
}