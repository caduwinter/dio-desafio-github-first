function darkToggle(){
    changeClasses();
    changeText();
    changeStyles();
    body.style['transition'] = '0.5s';
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
}

function changeText(){
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = 'Light Mode'
        h1.innerHTML = 'Dark Mode ON'
        return;
    }
    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Light Mode ON'
}

function changeStyles(){
    if(body.classList.contains(darkModeClass)){
        body.style['background-color'] = '#181818';
        h1.style['color'] = '#ffffff'
        button.style['background-color'] = '#ffffff';
        button.style['color'] = '#181818';
        return;
    }
    body.style['background-color'] = '#ffffff';
    h1.style['color'] = '#181818'
    button.style['background-color'] = '#181818';
    button.style['color'] = '#ffffff';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('button-mode');
const h1 = document.getElementById('title');
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', darkToggle);