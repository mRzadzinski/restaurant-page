import frame from '../index';
import leaf from '../img/green.jpeg';
import bananas from '../img/yellow.jpeg';
import paprika from '../img/red.jpeg';

function renderMenu() {
    frame.innerHTML =  '<div class="title">Menu</div>'
                        + '<div>Prepared with fresh ingredients without fire.</div>'
                        + '<div class="dishes">'
                            + '<div class="dish">'
                                + '<img class="dish-image" id="leaf-image" src="" alt="">'
                                + '<div class="dish-name">Health Reclaimer</div>'
                                + '<div class="dish-description">Mix of dark and juicy leafy greens. Cancer repellent.</div>'
                                + '<div class="price">$32</div></div>'
                            + '<div class="dish">'
                                + '<img class="dish-image" id="bananas-image" src="" alt="">'
                                + '<div class="dish-name">Sinful Euphoria</div>'
                                + '<div class="dish-description">Now when you\'re an adult you can eat sweets for lunch.</div>'
                                + '<div class="price">$44</div></div>'
                            + '<div class="dish">'
                                + '<img class="dish-image" id="paprika-image" src="" alt="">'
                                + '<div class="dish-name">Tears of Joy</div>'
                                + '<div class="dish-description">Savory, vegetable salad with spicy peppers.</div>'
                                + '<div class="price">$57</div></div></div>';

    const leafImage = document.querySelector('#leaf-image');
    const bananasImage = document.querySelector('#bananas-image');
    const paprikaImage = document.querySelector('#paprika-image');

    leafImage.src = leaf;
    leafImage.alt = 'leaf-image';
    bananasImage.src = bananas;
    bananasImage.alt = 'bananas-image';
    paprikaImage.src = paprika;
    paprikaImage.alt = 'paprika-image';
}

export default renderMenu;