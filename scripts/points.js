import { POSITION as DOT_POSITION } from "./dot.js"
import { POSITION as BRICK_POSITION } from "./player.js"

let points = 0;

export function getPoints() {
  return points;
}

export function setPoints(newPoints) {
  if (newPoints >= 0) points = newPoints;
}

/**
 * Increments the players points if the player and dot are in a certain area of eachother
 */
//TODO make the points accurate. Points are more easily give i the dot is on the left og the brick, meaning center the brick around a point
export function incrementPoints() {
  if (Math.abs(BRICK_POSITION.x - DOT_POSITION.x) < 48 && Math.abs(BRICK_POSITION.y - DOT_POSITION.y) < 48) {
    points++;
    document.getElementById("points").innerText = "Points: " + points;
  }
}