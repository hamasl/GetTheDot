import { random as random } from './random.js';


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


/**
 * Returns a pseudo random hex number
 */
export function getHex() {
  let hexNumber = "#"
  for (let i = 0; i < 6; i++) {
    hexNumber += hex[random(hex.length)]
  }
  return hexNumber
}