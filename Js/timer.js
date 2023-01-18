export default function Timer({
    minutesDisplay, 
    secondsDisplay,  
    resetControls,
    sound}
) {

function updateDisplay(minutes, seconds) {
minutesDisplay.textContent = String(minutes).padStart(2,"0")
secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

let timerIsRunning = true;

let timerTimeout;

function countDown() {
    if (timerIsRunning) {
      Stop();
    }
    timerIsRunning = true;
  
    timerTimeout = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
  
      if (seconds <= 0 && minutes <= 0) {
        resetControls();
        timerIsRunning = false;
        sound.stopSound()
        return;
      }
  
      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }
      updateDisplay(minutes, String(seconds - 1));
      countDown();
    }, 1000);
}

function Stop() {
    clearTimeout(timerTimeout)
}

function moreMinutes() {
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

updateDisplay(String(minutes + 5), seconds)
}

function anyLessMinutes() {
 let minutes = Number(minutesDisplay.textContent)
 let seconds = Number(secondsDisplay.textContent)
    
if(minutes <= 5){
    updateDisplay(minutes, seconds)
    return
}

updateDisplay(String(minutes - 5), seconds)
}


return{
    updateDisplay,
    countDown,
    moreMinutes,
    anyLessMinutes,
    Stop
}

}