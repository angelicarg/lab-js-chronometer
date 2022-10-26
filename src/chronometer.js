class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setinterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    let crono = [];
    let minutes = [];
    if (this.currentTime === 0) {
      return 0;
    }
    this.currentTime += crono;
    minutes = Math.floor(crono.length / 60);
    return minutes;
  } // ... your code goes here

  getSeconds() {
    const seconds = [];
    if (this.currentTime === 0) {
      return;
    }
    window.clearInterval(interval);
    seconds += this.currentTime % 60;
    if (seconds === 0) {
      return 0;
    }

    if (seconds > 1) {
      return seconds;
    }
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    setTimeout('parar(this.currentTime);', null);
    clearInterval(this.currentTime);
    // ... your code goes here
  }

  reset() {
    this.currentTime = new this.currentTime();
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
