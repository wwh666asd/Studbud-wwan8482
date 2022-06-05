var play = document.getElementById('play')
var pause = document.getElementById('pause')
var mname = document.getElementById('m-name')
var salt = document.getElementById('salt')
var unst = document.getElementById('unst')
var inner = document.getElementById('inner')
var SaltAvaMax = document.getElementById('Salt-Ava_Max')
var Unstoppable = document.getElementById('Unstoppable')
var imgUn = document.getElementById('c-un')
var imgSalt = document.getElementById('c-salt')

var current = 'Salt'

function saltPlay() {
  Unstoppable.pause()
  current = 'Salt'
  SaltAvaMax.play()
  // Get playback progress
  if (inner) {
    SaltAvaMax.ontimeupdate = (event) => {
      inner.style.width = `${event.target.currentTime / SaltAvaMax.duration * 100}%`
    }
  }
  // Set the title of the song 1
  mname.innerHTML = 'Salt'
  // Change the play button
  play.style.display = 'none'
  pause.style.display = 'inline-block'
  // Set up the cover
  if (imgSalt) {
    imgSalt.style.display = 'inline-block'
    imgUn.style.display = 'none'
  }
}

function unstPlay() {
  SaltAvaMax.pause()
  current = 'Unstoppable'
  Unstoppable.play()
  // Get playback progress
  if (inner) {
    Unstoppable.ontimeupdate = (event) => {
      inner.style.width = `${event.target.currentTime / Unstoppable.duration * 100}%`
    }
  }
  // Set the title of the song 2
  mname.innerHTML = 'Unstoppable'
  // Change the play button
  play.style.display = 'none'
  pause.style.display = 'inline-block'
  // Set up the cover
  if (imgSalt) {
    imgSalt.style.display = 'none'
    imgUn.style.display = 'inline-block'
  }
}

if (salt) {
  salt.onclick = saltPlay
  unst.onclick = unstPlay
}

play.onclick = () => {
  current === 'Salt' ? saltPlay() : unstPlay()
}
pause.onclick = () => {
  SaltAvaMax.pause()
  Unstoppable.pause()
  play.style.display = 'inline-block'
  pause.style.display = 'none'
}

var left = document.getElementById('left')
var right = document.getElementById('right')
// The next / previous song
function next() {
  current === 'Salt' ? unstPlay() : saltPlay()
}

if (left) {
  left.onclick = next
  right.onclick = next
}