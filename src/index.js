// write your code here
// https://localhost:3000/ramens
// https://localhost:3000/ramens/:id
let currentRamen;
document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/ramens')

    .then(response => response.json())

    .then(data => {
        showRamens(data);
        renderRamen(data[0]);
        addRamen();
        currentRamen = data[0].id;
    })


})
function showRamens(ramens){
    let ramenDiv = document.getElementById('ramen-menu')
    ramens.forEach(ramen => {
        let image = document.createElement('img')
        image.id = ramen.id
        image.src = ramen.image
        ramenDiv.append(image);

        image.addEventListener('click', () => {
            renderRamen(ramen)
        })
    })
}

function renderRamen(ramens){
    currentRamen = ramens;
        let ramenName = currentRamen.name
        let name = document.querySelector('.name')
        name.textContent = ramenName
        
        let displayImg = document.querySelector('.detail-image')
        displayImg.src = currentRamen.image
        
        let ramenRestaurant = currentRamen.restaurant
        let restaurant = document.querySelector('.restaurant')
        restaurant.textContent = ramenRestaurant

        let ramenRating = currentRamen.rating
        let rating = document.getElementById('rating-display')
        rating.textContent = ramenRating

        let ramenComment = currentRamen.comment
        let comment = document.getElementById('comment-display')
        comment.textContent = ramenComment
}

function addRamen(){
    let form = document.querySelector('#new-ramen')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let newRamenObj = {
            name: e.target['new-name'].value,
            image: e.target['new-image'].value,
            restaurant: e.target['new-restaurant'].value,
            rating: e.target['new-rating'].value,
            comment: e.target['new-comment'].value
        }
        renderRamen(newRamenObj)
        // let name = document.querySelector('.name')
        // name.textContent = newRamenObj.name

        // let displayImg = document.querySelector('img')
        // displayImg.src = newRamenObj.image

        // let restaurant = document.querySelector('.restaurant')
        // restaurant.textContent =newRamenObj.restaurant

        // let rating = document.getElementById('rating-display')
        // rating.textContent = newRamenObj.rating

        // let comment = document.getElementById('comment-display')
        // comment.textContent = newRamenObj.comment
    })
}

