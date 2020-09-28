//Easy by default
export let difficulty = 2000

let buttons = document.getElementsByClassName("difficultyModifiers");
let i = 0
//Adding an event listener for each of the butons
//Which sets the difficulty to the buttons value
//2000 for easy
//1500 for medium
//1000 for hard
//The number is how often in milliseconds the dot will respawn
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    difficulty = this.value
  })
} 
