import { random as random } from "./random.js"
//The x and y coordinate belonging to the button
export const POSITION = {
  x: 0,
  y: 0
}

const DOT = document.getElementById("dot")


/**
 * the function spawning the dot anywhere from 0 to 395 on each of the axises
 */
export function spawn() {
  POSITION.x = random(396)
  POSITION.y = random(396)
  DOT.style.top = `${POSITION.y}px`
  DOT.style.left = `${POSITION.x}px`
}