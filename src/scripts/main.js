// partie a
const btn = document.querySelector('.btn-menu');

btn.addEventListener('click', addClassToBody);

function addClassToBody(){
    console.log('la fonction addClassToBody est bien appelé');

    const body = document.querySelector('body');
    //body.classList.add('dark');
    //body.classList.toggle('menu-open');
    const currentState = body.getAttribute('menu-open')
    if (currentState == 'open'){
        body.setAttribute('menu-open', 'open');
    } else {
        body.toggleAttribute('menu-open', 'close');
    }
} 
/*
//partie b
const menuLinks = document.querySelectorAll('menu__link');
// => lienst intro, liens help
// boucler sur mon tableau de lien
menuLinks.forEach(function(link) {
    //ecouter le click
    link.addEventListener('click', onMenuClick);

});

function onMenuClick (e) {
    e.preventDefault();
    const target = e.currentTarget;
    console.log('on menu click bien appelé')
    console.log(e)
    console.log(Target)
}*/