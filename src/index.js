import './style.scss';
import createTemplateHTML from './modules/templateHTML';
import createHome from './modules/home';

createTemplateHTML();
const content = document.querySelector('#content');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');
export default content;
createHome();
home.onclick = () => createHome();

