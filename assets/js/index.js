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

function search() {
    // get elements HTML
    const numberOfRooms = parseInt(document.getElementById('input1').value)
    const minSquareMeters = parseInt(document.getElementById('input2').value)
    const maxSquareMeters = parseInt(document.getElementById('input3').value)
    // display data entered in the console
    console.log('number of rooms: '.concat(numberOfRooms).concat(' type: '.concat(typeof(numberOfRooms))))
    console.log('min meters: '.concat(minSquareMeters).concat(' type: '.concat(typeof(minSquareMeters))))
    console.log('max meters: '.concat(maxSquareMeters).concat(' type: '.concat(typeof(maxSquareMeters))))
    // validate inputs
    if (isNaN(numberOfRooms) || isNaN(minSquareMeters) || isNaN(maxSquareMeters)) {
        alert('- Faltan campos por llenar'.concat('\n'.concat('- Asegúrese de introducir valores numéricos')))
        return location.reload()
    }
    if (numberOfRooms > 5) {
        alert('El número máximo de habitaciones disponibles por propiedad es de 5')
        return location.reload()
    }
    if (minSquareMeters >= maxSquareMeters) {
        alert('El alcance mínimo de metros cuadrados no puede ser mayor que el alcance máximo')
        return location.reload()
    }
    
}

//variables 
const cardContainer = document.querySelector('.properties') 
showCards(cardContainer)

const btn = document.getElementById('btn')
btn.addEventListener('click', search)
