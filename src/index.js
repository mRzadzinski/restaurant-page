import './style.scss';
import gitIcon from './img/github.png';
import renderHome from './modules/home';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';

const logo = document.querySelector('#logo');
const frame = document.querySelector('#frame');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');
const footerImg = document.querySelector('#github');
footerImg.src = gitIcon;
export default frame;

renderHome();
logo.onclick = () => renderHome();
home.onclick = () => renderHome();
menu.onclick = () => renderMenu();
contact.onclick = () => renderContact();