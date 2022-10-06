import { menuArray } from './data.js';

const menu = document.getElementById('menu')
// render out this of menu array to html

function render() {
    let menuitemshtml = ``
    menuArray.forEach((menuItem) => {
        menuitemshtml += `
        <div class="menu-item">
        <img src=${menuItem.image} alt="menu item image">
        <div class="menu-item-details">
            <div>
                <h4>${menuItem.name}</h4>
                <p class="ingredients">${menuItem.ingredients}</p>
                <p>$ ${menuItem.price}</p>
            </div>
            <div>
                <button class="add-item-btn"><i class="fa-regular fa-plus"></i></button>
            </div>
        </div>
    </div>
        `
    });

    menu.innerHTML = menuitemshtml;
}

render();