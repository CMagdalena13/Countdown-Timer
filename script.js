const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
const newYears = "1 Jan 2023"

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds/3600) % 24;
    const mins = Math.floor(seconds/60) % 60;
    const sec = Math.floor(seconds) %60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(sec);
  }

function formatTime(time){
    return time <10 ? `0${time}` : time;

}

countdown();

setInterval(countdown,1000);