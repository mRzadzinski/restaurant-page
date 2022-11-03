import './style.scss';
import veggiesBackground from './img/vegetables-background.jpeg';
import gitIcon from './img/github.png';

const body = document.querySelector('body');
body.innerHTML = '<div class="header"></div>'
                + '<div id="content"></div>'
                + '<div class="footer">by mRzadzinski&nbsp&nbsp;'
                + '<a href="https://github.com/mRzadzinski/restaurant-page">'
                + '<img id="github" src="" alt="github"></a></div>';
const footerImg = document.querySelector('#github');
footerImg.src = gitIcon;

console.log('hello')