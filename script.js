let flag = 0;
const nav = document.querySelector('#main');
const lista = document.querySelectorAll('.navTRESC');
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.list');
let arrow = document.querySelector('.arrow');
let big= document.querySelector('.bigLogo');
const imageLogo=document.querySelector('.imagelogo');
let topOfNav = big.offsetHeight;

// nawigacja przyspawana do gory
function fixNav() { 
  topOfNav = big.offsetHeight;
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
    rotate();

  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}
// rozwjanie nawigacji 
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
// strzałka znika gdy pierwszy raz przejeidzmy nav offsettop
function hideArrow() {
  if (window.scrollY > nav.offsetTop) {
    arrow.classList.add('noVisable');
  }
  // else{
  //   arrow.classList.remove('noVisable');
  // }
}
// jezeli wroicmy na gore a nawgaija jest rozwinieta to schowa się
function checkList() {
  if (window.scrollY < nav.offsetTop && flag == 1) {
    toogle();
  }
}
// po kliknciu jakiego elemenu z menu nawigja sie chowa
for (var i = 0, len = lista.length; i < len; i++) {
  lista[i].addEventListener('click', toogle);
}

hamburger.addEventListener('click', toogle);
window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', hideArrow);
window.addEventListener('scroll', checkList);



//rotate 360 logo gdy fix nav 
function rotate(){
  imageLogo.setAttribute('style','transform:rotate(360deg)');
}
