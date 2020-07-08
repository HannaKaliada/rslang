export default class CircleTimer {

TIME_LIMIT = 60;
timePassed = 0;
timeLeft = this.TIME_LIMIT;

  formatTime(seconds) {
    return `${seconds}`;
  }

  renderCircleTimer() {
    const container = document.querySelector('.container');
    container.insertAdjacentHTML('beforeend', `<div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining green"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
    ${this.formatTime(this.timeLeft)}
    </span>
  </div>`);
  }

  startTimer() {
    let timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.TIME_LIMIT - this.timePassed;
      console.log(this.timePassed);
      if (this.timePassed == 60) {
        clearInterval(timerInterval);
      }
      document.getElementById("base-timer-label").innerHTML = this.formatTime(this.timeLeft);
      this.setCircleDasharray();
    }, 1000);
  }


  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.TIME_LIMIT;
    return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction);
  }

  // Update the dasharray value as time passes, starting with 283
  setCircleDasharray() {
    const circleDasharray = `${(
      this.calculateTimeFraction() * 283
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }

}
