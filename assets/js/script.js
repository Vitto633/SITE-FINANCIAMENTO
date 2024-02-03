function mudaCard() {
  let card = document.querySelector('.btn-card');
  let button = document.getElementById('btnText');

  if (card) {
    if(card.classList.contains('click')){
      card.classList.remove('click');
      button.innerHTML = "+";
    }else{
      card.classList.add('click');
      button.innerHTML = "-";
    }
    
  }
}

function mudaCard2() {
  let card = document.querySelector('.btn-card2');
  let button = document.getElementById('btnText2');
  if (card) {
    if(card.classList.contains('click')){
      card.classList.remove('click');
      button.innerHTML = "+";
    }else{
      card.classList.add('click');
      button.innerHTML = "-";
    }
    
  }
}

function mudaCard3() {
  let card = document.querySelector('.btn-card3');
  let button = document.getElementById('btnText3');
  if (card) {
    if(card.classList.contains('click')){
      card.classList.remove('click');
      button.innerHTML = "+";
    }else{
      card.classList.add('click');
      button.innerHTML = "-";
    }
    
  }
}

function mudaCard4() {
  let card = document.querySelector('.btn-card4');
  let button = document.getElementById('btnText4');
  if (card) {
    if(card.classList.contains('click')){
      card.classList.remove('click');
      button.innerHTML = "+";
    }else{
      card.classList.add('click');
      button.innerHTML = "-";
    }
    
  }
}