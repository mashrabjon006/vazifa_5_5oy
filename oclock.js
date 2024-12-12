let timer;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

function updateTimerDisplay() {
    function formatNumber(num) {
        if (num < 10) {
            return '0' + num; 
        } else {
            return num.toString()
        }
    }

    const hours = formatNumber(Math.floor(seconds / 3600));
    const minutes = formatNumber(Math.floor((seconds % 3600) / 60));
    const secs = formatNumber(seconds % 60);
    
    timerDisplay.textContent = `${hours}:${minutes}:${secs}`;
}

startButton.addEventListener('click', function() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(function() {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }
});

stopButton.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

resetButton.addEventListener('click', function() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateTimerDisplay();
});

updateTimerDisplay();