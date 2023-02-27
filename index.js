import dogs from '/data.js'
import Dog from '/Dog.js'

const heartBtn = document.querySelector(".heart-btn")
const crossBtn = document.querySelector(".cross-btn")
let counter = 0

function newDog() {
    if (counter === dogs.length) {
        counter = 0 
        dog = new Dog(dogs[counter])
        render()
    } else {
        dog = new Dog(dogs[counter])
        render()
    }
}

function render() {
    document.querySelector('.profile').innerHTML = dog.getDogHtml()
    heartBtn.style.backgroundColor = 'white'
    crossBtn.style.backgroundColor = 'white'
}

function like() {
    if (dog.hasBeenSwiped == false) {
        dog.setMatchStatus()
        if (heartBtn.classList.contains('clicked-heart')) {
            heartBtn.classList.remove('clicked-heart')
            document.getElementById('badge-like').classList.add('hidden')
        } else {
            document.getElementById('badge-like').classList.remove('hidden')
            heartBtn.style.backgroundColor = '#DBFFF4'
        }

        counter++
        setTimeout(newDog, 1000)
        
    }
}

function reject() {
    if (dog.hasBeenSwiped == false) {
        dog.setSwipedStatus()
        if (crossBtn.classList.contains('clicked-cross')) {
            crossBtn.classList.remove('clicked-cross')
            document.getElementById('badge-none').classList.add('hidden')
        } else {
            document.getElementById('badge-none').classList.remove('hidden')
            crossBtn.style.backgroundColor = '#FFE7EF'
        }
    }
    counter++
    setTimeout(newDog, 1000)
}

heartBtn.addEventListener('click', like)
crossBtn.addEventListener('click', reject)


let dog = new Dog(dogs[counter])
render()