var time = document.getElementById('time-1')
var timer = new Timer(0, true)

// Start machine timing
function start() {
  timer.start((res) => {
    time.innerHTML = res.replace(/:/g, ' : ')
  })
}

var startBtn = document.getElementById('start-btn')
var pauseBtn = document.getElementById('pause-btn')
startBtn.onclick = () => {
  start()
  pauseBtn.style.display = 'inline-block'
  startBtn.style.display = 'none'
}
pauseBtn.onclick = () => {
  timer.pause()
  pauseBtn.style.display = 'none'
  startBtn.style.display = 'inline-block'
}

var resetBtn = document.getElementById('reset-btn')
if (resetBtn) {
  resetBtn.onclick = () => {
    time.innerHTML = '00 : 00 : 00'
    timer.pause()
    timer = new Timer(0, true)
    pauseBtn.style.display = 'none'
    startBtn.style.display = 'inline-block'
  }
}