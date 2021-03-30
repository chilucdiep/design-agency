const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const nav = document.querySelector('.nav');
const fadeElems = document.querySelectorAll('.has-fade');
const links = document.querySelectorAll('.link');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    
    if(nav.classList.contains('open')){ // Close Hamburger Menu
        nav.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }

    else{ // Open Hamburger Menu
        nav.classList.add('open');
        body.classList.add('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }

    links.forEach(item => {item.addEventListener('click', function(){
        console.log('click link');
    
        nav.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    })
    });
});
