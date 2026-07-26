import { menuArray } from '/data.js'

const productsContainer = document.getElementById("products-container")
const orderContainer = document.getElementById('order-container')
const orderItems = document.getElementById('order-items')

const orderArray = []


document.addEventListener("click", function(e) {
    if(e.target.dataset.food) {
        
        orderArray.push(e.target.dataset.food)
        console.log(orderArray);
        renderOrder()
        

        orderContainer.style.display = 'block'
    }
})

function renderOrder() {
    let numPizza = 0, numHamburguer = 0, numBeer = 0, totalPrice = 0

    orderArray.forEach(function(item) {
        if(item === 'Pizza') {
            numPizza += 1
        }
        else if (item === 'Hamburger') {
            numHamburguer += 1
        }
        else if (item === 'Beer') {
            numBeer += 1
        }
    })
    
    totalPrice = (numPizza * 14) + (numHamburguer * 12) + (numBeer * 12)

    let htmlOrder = ''


    if (numPizza) {
        htmlOrder += `  <div class="order-item">
                            <p>Pizza x${numPizza}<span class="remove-item">remove</span></p>
                            <p>${14 * numPizza}</p>
                        </div>`
    }

    if (numHamburguer) {
        
        htmlOrder += `  <div class="order-item">
                            <p>Hamburguer x${numHamburguer}<span class="remove-item">remove</span></p>
                            <p>${12 * numHamburguer}</p>
                        </div>`
    }

    if (numBeer) {
        htmlOrder += `  <div class="order-item">
                            <p>Beer x${numBeer}<span class="remove-item">remove</span></p>
                            <p>${12 * numBeer}</p>
                        </div>`
    }

    htmlOrder += `  <div class="order-total-price">
                        <p>Total price:</p>
                        <p>$${totalPrice}</p>
                    </div>`

    orderItems.innerHTML = htmlOrder
}


function renderProducts() {

    const htmlArray = menuArray.map(function(product) {
        const {name, ingredients, price, emoji} = product
        return `<div class="product">
                    <div class="product-info">
                        <div class="emoji-container">
                            <p class="product-emoji">${emoji}</p>
                        </div>
                        <div>
                            <h3>${name}</h3>
                            <p class="product-ingredients">${ingredients.join(", ")}</p>
                            <p class="product-price">$${price}</p>
                        </div>
                    </div>
                    <div class="button-container">
                        <button class="add-button" data-food="${name}">+</button>
                    </div>
                 </div>`
    }).join("")

    productsContainer.innerHTML = htmlArray

}

renderProducts()



