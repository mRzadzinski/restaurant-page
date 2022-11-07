import frame from '../index';

function renderContact() {
    frame.innerHTML = 
                        '<div id="contact-container">'
                        + '    <div id="contact-info">'
                        + '    <div id="restaurant-name">Raw Eatery</div>'
                        + '    <div id="info">'
                        + "        <b>Address:</b><br> <div class=\"small-font\">28° 2' 50'' N, 90° 27' 18'' E'<br>"
                        + '        Bhutan, Bumthang District</div> <br><br>'
                        + '        <b>Hours:</b><br> <div class="small-font">10:00 a.m. - 10 p.m.</div> <br> <br>'
                        + '        <b>Reservations:</b><br> <div class="small-font">raw@eatery.bt</div> <br> <br>'
                        + '        <b>Hint:</b><br> <div class="small-font">The ascend is quite steep but it\'s worth it.</div>'
                        + '        </div>'
                        + '    </div>'
                        + '    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d32424.559511212265!2'
                        + '        d90.454167!3d28.048333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375faf63ec471821%3A0x16ad97195adac'
                        + '        0e!2sKangkar%20P%C3%BCnzum!5e1!3m2!1spl!2spl!4v1667822336025!5m2!1spl!2spl" allowfullscreen=""'
                        + '        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                        + '</div>';
}

export default renderContact;