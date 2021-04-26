var headerButton = document.querySelector('.page-header__button');
var navMain = document.querySelector('.main-nav');

headerButton.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
  if (headerButton.classList.contains('page-header__button--burger')) {
    headerButton.classList.remove('page-header__button--burger');
    headerButton.classList.add('page-header__button--close');
  } else {
    headerButton.classList.add('page-header__button--burger');
    headerButton.classList.remove('page-header__button--close');
  }
});

/*No-JS*/

var pageHeader = document.querySelector('.page-header-top');

pageHeader.classList.remove('page-header-top--nojs');

/*Main menu tablet*/

var tabletWidth = window.matchMedia('(min-width: 768px)');
var navMain = document.querySelector('.main-nav');

function handleTabletChange(e) {
  if (e.matches) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
}

tabletWidth.addListener(handleTabletChange)
handleTabletChange(tabletWidth)
