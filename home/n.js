const navMenu = document.getElementById('meimg img'),
      navToggle = document.getElementById('menu-ll'),
      navClose = document.getElementById('menu3')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}