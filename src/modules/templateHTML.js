import gitIcon from '../img/github.png';

function createTemplateHTML() {
    const body = document.querySelector('body');
    body.innerHTML += '';
    const footerImg = document.querySelector('#github');
    footerImg.src = gitIcon;
}

export default createTemplateHTML;

