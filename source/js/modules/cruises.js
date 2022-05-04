const cards = document.querySelectorAll('[data-element="card"]');

const getCruise = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function (evt) {
      for (let r = 0; r < cards.length; r++) {
        cards[r].classList.remove('is-active');
      }
      const card = evt.target.closest('[data-element="card"]');
      card.classList.add('is-active');
    }, {passive: true});
  }
};

export {getCruise};
