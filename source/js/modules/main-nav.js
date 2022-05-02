const navMain = document.getElementById('main-nav');
const navToggle = document.getElementById('main-nav-toggle');
const navWrapper = document.getElementById('nav-wrapper');
const pageBody = document.getElementById('body');

const getNavigation = () => {
  navMain.classList.remove('is-active');

  navToggle.addEventListener('click', function () {

    if (navMain.classList.contains('is-invalid')) {
      navMain.classList.remove('is-invalid');
      navMain.classList.add('is-open');
      pageBody.classList.add('scroll-hidden');
    } else {
      navMain.classList.add('is-invalid');
      navMain.classList.remove('is-open');
      pageBody.classList.remove('scroll-hidden');
    }
  });

  navWrapper.addEventListener('click', function () {
    navMain.classList.add('is-invalid');
    navMain.classList.remove('is-open');
    pageBody.classList.remove('scroll-hidden');
  });
};

export {getNavigation};
