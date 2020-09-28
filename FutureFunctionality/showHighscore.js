import { difficulty as difficulty } from "../scripts/difficultyButtons.js"
import { getHighscore as getHighscore } from "./highscores.js"
const DEFAULT_TEXT = `HIGHSCORE: `
const HIGHSCORE_ELEMENT = document.getElementById("highscore")

export function changeHighscoreDisp(mode) {
  HIGHSCORE_ELEMENT.innerText = DEFAULT_TEXT + `${getHighscore(mode)}`
}