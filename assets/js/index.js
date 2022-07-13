// import JSON
import { propertiesJSON } from './properties.js'
const properties = propertiesJSON
console.log(properties)

// functions
function cardsTemplate(card) {
    // HTML template
    return `
        <div class="property">
            <div class="img" style="background-image: url('${card.src}')"></div>
            <section>
                <h5>${card.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${card.rooms}</p>
                    <p>Metros: ${card.m}</p>
                </div>
                <p class="my-3">${card.description}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
        </div>`
}

function showCards(cardContainer) {
    let html = ''
    for (const property of properties) {
        html += cardsTemplate(property)
    }
    cardContainer.innerHTML = html
}

//variables 
const cardContainer = document.querySelector('.properties') 
showCards(cardContainer)