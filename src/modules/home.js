import frame from '../index';
import smilingGirl from '../img/smiling-girl.jpeg';

function renderHome() {
    frame.innerHTML = '<div class="title">Welcome!</div>'
                        + '<div>Come, sit and eat. <br> We\'re going to make your tummy happy.</div>'
                        + '<img id="smiling-girl" src="" alt="">';
    const img = document.querySelector('#smiling-girl');
    img.src = smilingGirl;
}

export default renderHome;