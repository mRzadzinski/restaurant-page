import './style.scss';
import createTemplateHTML from './modules/templateHTML';
import renderHome from './modules/home';
import renderMenu from './modules/menu';
import renderContact from './modules/contact';

createTemplateHTML();
const logo = document.querySelector('#logo');
const frame = document.querySelector('#frame');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');
export default frame;
renderHome();
logo.onclick = () => renderHome();
home.onclick = () => renderHome();
menu.onclick = () => renderMenu();
contact.onclick = () => renderContact();