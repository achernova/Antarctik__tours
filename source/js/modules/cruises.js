const cruise = document.getElementById('#cruis');
const cruiseCard = document.getElementById('#cruise-card');

const getCruise = () => {
  for (let i = 0; i < cruise.length; i++) {
    cruise[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      cruiseCard.classList.add('is-active');
    });
  }
};

getCruise();

export {getCruise};
