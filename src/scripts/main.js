const btn = document.querySelector('.btn-menu');

btn.addEventListener('click', addClassToBody);

function addClassToBody(){
    console.log('la fonction addClassToBody est bien appelé');

    const body = document.querySelector('body');
    //body.classList.add('dark');
    //body.classList.toggle('menu-open');
    const currentState = body.getAttribute('menu-open')
    if (currentState == 'open'){
        body.setAttribute('menu-open', 'open'),
    } else {
        body.toggleAttribute('menu-open', 'close');
    }
}
