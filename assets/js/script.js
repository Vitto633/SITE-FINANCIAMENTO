function mudaCard() {
  let card = document.getElementById('btn-card');

  if (card.id == 'click') {
    card.removeAttribute('id');
  } else {
    card.setAttribute('id', 'click');
  }
}