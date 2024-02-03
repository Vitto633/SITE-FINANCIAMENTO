function mudaCard() {
  let card = document.querySelector('.btn-card');

  if (card) {
    if(card.classList.contains('click')){
      card.classList.remove('click');
    }else{
      card.classList.add('click');
    }
    
  }
}