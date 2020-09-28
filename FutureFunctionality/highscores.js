function Highscore(ownerName, totalPoints, mode) {
  this.name = ownerName;
  this.points = totalPoints;
  this.difficulty = mode;
}

export function saveHighscore(name = "No name", score = 0, mode) {
  //Dont have default in easy mode to hinder storing in situations were the difficulty is unknown
  const RANK = topTenHighscoreRank()
  if (!(RANK > 0 && RANK < 11)) return;
  let highscore = new Highscore(name, score, mode)
  localStorage.setItem(`${mode}${RANK}`, JSON.stringify(highscore))
}

function topTenHighscoreRank(score = 0, mode) {
  let highscores = getHighScores(mode);
  return highscores.filter(s => s.points >= score).length + 1;
}

function getHighScores(difficultyMode) {
  let highscores = []
  for (let i = 1; i < 11; i++) {
    localStorage.getItem(`${difficultyMode}${i}`)
  }
  return highscores;
}

export function getHighscore(difficultyMode) {
  const HIGHSCORE = localStorage.getItem(`${difficultyMode}1`)
  return (HIGHSCORE === null) ? 0 : HIGHSCORE
}

