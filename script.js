let flag = 0;
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;
const lista = document.querySelectorAll('.navTRESC');
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.list');
let arrow = document.querySelector('.arrow');

function fixNav() {
 
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');

  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

function toogle() {
  if (flag == 0) {
    ul.classList.add('column');
    for (var i = 0; i < lista.length; i++) {
      lista[i].classList.add('visavble');
    }
    flag = 1;
  } else {
    ul.classList.remove('column');
    for (var i = 0; i < lista.length; i++) {
      lista[i].classList.remove('visavble');
    }
    flag = 0;
  }
}


function hideArrow() {
  if (window.scrollY > nav.offsetTop) {
    arrow.classList.add('noVisable');
  }
}

function checkList() {
  if (window.scrollY < nav.offsetTop && flag == 1) {
    toogle();
  }
}

for (var i = 0, len = lista.length; i < len; i++) {
  lista[i].addEventListener('click', toogle);
}
hamburger.addEventListener('click', toogle);
window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', hideArrow);
window.addEventListener('scroll', checkList);