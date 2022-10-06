import { menuArray } from './data.js';
let orderlist = []


document.addEventListener('click', function (e) {
    if (e.target.dataset.add) {
        addOrder(e.target.dataset.add);
    } else if (e.target.dataset.remove) {
        removeOrder(e.target.dataset.remove)
    } else if (e.target.id == 'complete-order-btn') {
        completeOrder()
    }
})

function addOrder(id) {
    const orderItem = menuArray.filter((menuItem) => menuItem.id == id)[0]
    orderlist.push(orderItem);
    renderOrder()

}

function removeOrder(id) {
    orderlist.forEach((order) => {
        if (order.id == id) {
            orderlist.splice(order, 1)
            console.log("item removed")
        }
    })
    renderOrder();
}

function completeOrder() {
    console.log('complete order!!')
}

function getOrderHtml() {
    let orderItemHtml = ``

    orderlist.forEach((order) => {
        orderItemHtml += `
        <div class="order-item">
            <div class="class-order-item-details">
                <h5>${order.name}</h5>
                <button class="remove-item" data-remove="${order.id}">remove</button>
            </div>
            <p>$ ${order.price}</p>
        </div>
        `
    })
    orderItemHtml += `
    <div class="order-item total">
        <div class="class-order-item-details">
            <h5>Total price: </h5>
        </div>
        <p>$ ${orderlist.reduce((total, curr) => total + curr.price, 0)}</p>
    </div>
    `

    return orderItemHtml;
}

function renderOrder() {
    document.getElementById('order-summary-list').innerHTML = getOrderHtml();
}

function getMenuHtml() {
    let menuitemshtml = ``;

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
                <button class="add-item-btn" data-add="${menuItem.id}"><i class="fa-regular fa-plus"></i></button>
            </div>
        </div>
    </div>
        `
    });

    return menuitemshtml;
}


function render() {
    document.getElementById('menu').innerHTML = getMenuHtml();
}

render();