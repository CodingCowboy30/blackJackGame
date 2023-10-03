// 1. Create two variables firstCard and secondCard.
// Set values to a random number between 1-21

 let firstCard = 8
let secondCard = 10
let sum = firstCard + secondCard  // 24
let hasBlackJack = false
let isAlive = true

if (sum < 21){
    console.log("Do you want to draw a new card? 🤞")
    
} else if (sum === 21) {
    console.log("Wohoo! You've got BlackJack! 😎") 
    hasBlackJack = true
} else{
    console.log("You're out of the game!🤦‍♂️")
    isAlive = false
}
console.log(isAlive)

// CASH OUT!


