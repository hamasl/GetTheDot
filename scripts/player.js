import * as randomHexColor from "./randomHexColor.js";
import * as random from "./random.js"

//The x and y coordinates belonging to the player
export const POSITION = {
  x: 0,
  y: 0
}
//Using wrapper to avoid an error
export let isGameStarted = { value: false }

const PLAYER = document.getElementById("player");

/**
 * the function spawning the player anywhere from 0 to 395 on each of the axises
 */
export function spawn() {
  POSITION.x = random.random(376)
  POSITION.y = random.random(376)
  PLAYER.style.top = `${POSITION.y}px`
  PLAYER.style.left = `${POSITION.x}px`
}

//The controls for the player
document.onkeydown = function (e) {
  if (!isGameStarted.value) return;
  switch (e.keyCode) {
    //a
    case 65:
    //Left
    case 37:
      if (POSITION.x >= 15) {
        POSITION.x -= 30;
        PLAYER.style.left = `${POSITION.x}px`
      }
      break;
    //w
    case 87:
    //Up
    case 38:
      if (POSITION.y >= 10) {
        POSITION.y -= 30;
        PLAYER.style.top = `${POSITION.y}px`
      }
      break;
    //d
    case 68:
    //Right
    case 39:
      if (POSITION.x <= 340) {
        POSITION.x += 30;
        PLAYER.style.left = `${POSITION.x}px`
      }
      break;
    //s
    case 83:
    //Down
    case 40:
      if (POSITION.y <= 335) {
        POSITION.y += 30;
        PLAYER.style.top = `${POSITION.y}px`
      }
      break;

    case 67:
      PLAYER.style.backgroundColor = randomHexColor.getHex();
      break;
    default:
      console.log(e.keyCode);
      break;
  }
}


/* DID not work any better than the switch statement only difference is potential for diagonal movement
const BRICK = document.getElementById("animate");
document.onkeydown = function (e) {
  console.log(e.keyCode);
  if (e.keyCode === 65 || e.keyCode === 37) {
    if (x >= 10) {
      x -= 10;
      BRICK.style.left = `${x}px`
    }
  }
  if (e.keyCode === 87 || e.keyCode === 38) {
    if (y >= 10) {
      y -= 10;
      BRICK.style.top = `${y}px`
    }
  }
  if (e.keyCode === 68 || e.keyCode == 39) {
    if (x <= 340) {
      x += 10;
      BRICK.style.left = `${x}px`
    }

  }
  if (e.keyCode === 83 || e.keyCode === 40) {
    if (y <= 340) {
      y += 10;
      BRICK.style.top = `${y}px`
    }
  }
}
*/
