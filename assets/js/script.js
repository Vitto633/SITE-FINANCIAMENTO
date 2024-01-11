let ultimaPosicao = 0;

document.addEventListener("scroll", function scrollHeader(){
    const nav = document.querySelector("nav"); 
    let atualPosicao = window.scrollY;

    if(atualPosicao > ultimaPosicao) {
        nav.style.top = '-5em'
        TiraDropDown(dropDown);

    } else {
        nav.style.top = '0'
        
    }

    ultimaPosicao = atualPosicao;

})