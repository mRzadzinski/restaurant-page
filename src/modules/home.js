import content from '../index';
import smilingGirl from '../img/smiling-girl.jpeg';

function createHome() {
    content.innerHTML = '<div id="frame">'
                            + '<div>Welcome!</div>'
                            + '<div>Come, sit and eat. <br> We\'re going to make your tummy happy.</div>'
                            + '<img id="smiling-girl" src="" alt="">'
                        + '</div>';
    const img = document.querySelector('#smiling-girl');
    img.src = smilingGirl;
}

export default createHome;