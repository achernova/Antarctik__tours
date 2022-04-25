const navMain = document.getElementById('main-nav');
const navToggle = document.getElementById('main-nav-toggle');

const getNavigation = () => {
  navMain.classList.remove('is-active');

  navToggle.addEventListener('click', function () {

    if (navMain.classList.contains('is-invalid')) {
      navMain.classList.remove('is-invalid');
      navMain.classList.add('is-open');
    } else {
      navMain.classList.add('is-invalid');
      navMain.classList.remove('is-open');
    }
  });
};

export {getNavigation};
