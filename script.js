const MENUBUTTON = document.querySelector('.harmburger');
const MOBILEMENU = document.querySelector('.mobile_nav');

MENUBUTTON.addEventListener('click', function(){
      MENUBUTTON.classList.toggle('is-active');
      MOBILEMENU.classList.toggle('is-active');
});