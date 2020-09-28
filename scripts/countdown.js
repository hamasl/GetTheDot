export function Countdown(minutes = 0, seconds = 0, outputId = "", finishedCountdownAction = function () { }) {
  //Had to add thisObj because when calling styleTimeOutput "this" would revert back to the window
  let thisObj = this
  this.outputObj = document.getElementById(outputId)
  this.startingMinutes = minutes;
  this.startingSeconds = seconds;
  //Default values
  this.remainingTimeSeconds = 0;
  this.interval = "";

  //Function
  this.styleTimeOutput = function (timeInSeconds = 0) {
    let minutes = Math.floor(timeInSeconds / 60)
    let seconds = timeInSeconds % 60
    if (Math.floor(seconds / 10) == 0) {
      return `${minutes} : 0${seconds}`
    } else {
      return `${minutes} : ${seconds}`
    }

  }

  /**
   * resets the countdown
   * and starts a new countdown interval
   */
  this.startCountdown = function () {
    thisObj.reset();
    thisObj.interval = setInterval(thisObj.updateCountdown, 1000)
  }
  /**
   * Updates the countdown
   * If there are less then or 0 seconds left the countdown interval stops, and the method put into the Countdown   * constructor is executed
   */
  this.updateCountdown = function () {
    thisObj.remainingTimeSeconds--;
    thisObj.outputObj.innerText = thisObj.styleTimeOutput(thisObj.remainingTimeSeconds)
    if (thisObj.remainingTimeSeconds <= 0) {
      clearInterval(thisObj.interval);
      finishedCountdownAction()
    }
  }
  this.reset = function () {
    thisObj.remainingTimeSeconds = (thisObj.startingMinutes * 60 + thisObj.startingSeconds);
    thisObj.outputObj.innerText = thisObj.styleTimeOutput(thisObj.remainingTimeSeconds)
    clearInterval(thisObj.interval);
  }
}


