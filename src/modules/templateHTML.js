import gitIcon from '../img/github.png';

function createTemplateHTML() {
    const body = document.querySelector('body');
    body.innerHTML += 
                        '<div class="header">'
                        + '    <div id="logo">RAW EATERY</div>'
                        + '    <div class="nav">'
                        + '        <div id="home">Home</div>'
                        + '        <div id="menu">Menu</div>'
                        + '        <div id="contact">Contact</div>'
                        + '    </div>'
                        + '</div>'
                        + '<div id="content">'
                        + '    <div id="frame">'
                        + '    </div>'
                        + '</div>'
                        + '<div class="footer">'
                        + '    by mRzadzinski&nbsp&nbsp;'
                        + '    <a href="https://github.com/mRzadzinski/restaurant-page">'
                        + '    <img id="github" src="" alt="github"></a>'
                        + '</div>'
    ;
    const footerImg = document.querySelector('#github');
    footerImg.src = gitIcon;
}

export default createTemplateHTML;

