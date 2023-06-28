// Remember to import the data and Dog class!
import dogs from './data.js'
import Dog from './Dog.js'


const newDogPicture = ()=> {
    const newDog = dogs.shift()
    dogs.push(newDog)
    return  newDog 
}



function render(){
    document.getElementById('dog').innerHTML = doggy.dogHtml()
    document.getElementById('dog').style.background =`url(./${doggy.avatar})`
    document.getElementById('dog').style.backgroundSize = "cover"
}

let doggy = new Dog(newDogPicture())

render()

function swipe(){
    doggy.hasBeenSwiped = true
    render()
    doggy = new Dog(newDogPicture())
    setTimeout (()=>{
        render()
    }, 1000)
    
}

document.getElementById('cross-btn').addEventListener('click', ()=>{
    swipe()
})
document.getElementById('heart-btn').addEventListener('click', ()=>{
    doggy.hasBeenLiked = true
    swipe()
})