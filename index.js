import dogs from '/data.js'
import Dog from '/Dog.js'

function newDog() {
    dog = new Dog(dogs.shift())
    render()
}

function render() {
    document.querySelector('.profile').innerHTML = dog.getDogHtml()
}

function like() {
    dog.setMatchStatus()
    document.getElementById("badge-like").classList.remove('hidden')
}

document.querySelector(".heart-btn").addEventListener('click',like)



let dog = new Dog(dogs[0])
render()