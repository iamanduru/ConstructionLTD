/*SHOW MENU*/
const navMenu =  document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*Show Menu*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        });
}

/*Menu Hide*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


    