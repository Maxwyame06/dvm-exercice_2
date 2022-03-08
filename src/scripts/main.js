const btn = document.querySelector('.btn-menu');

btn.addEventListener('click', addClassToBody);

function addClassToBody(){
    console.log('la fonction addClassToBody est bien appelé');

    const body = document.querySelector('body');
    //body.classList.add('dark');
    body.setAttribute('data-menu', 'open');
}
