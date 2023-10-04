// 1. Create two variables firstCard and secondCard.
// Set values to a random number between 1-21

let firstCard = 8
let secondCard = 10
let sum = firstCard + secondCard   // 24
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 21){
    message = "Do you want to draw a new card? 🤞"
} else if (sum === 21) {
    message ="Wohoo! You've got BlackJack! 😎" 
    hasBlackJack = true
} else {
    message= "You're out of the game!🤦‍♂️"
    isAlive = false
}
console.log(message)

// CASH OUT!


