
function Timer (time, type, callback) {
  this.init(time, type, callback)
}

Timer.prototype.init = function (time, type, callback) {
  this.callback = callback || function () {}
  this.time = time != undefined ? time : parseInt(Math.random() * 3600)
  this.timerId = null

  if (type === undefined) {
    this.type = true
  } else {
    this.type = type
  }
}

Timer.prototype.start = function (callback) {
  this.callback = callback || function () {}
  !this.timerId && this.reTime()
}

// Pause/Stop
Timer.prototype.pause = function () {
  if (this.timerId) {
    clearTimeout(this.timerId)
    this.timerId = null
  }
}

/**
 * Refresh the time
 * @return {string} 
 */
Timer.prototype.reTime = function () {
  if (this.type) {
    this.time++
  } else if (this.time > 0) {
    this.time--
  } else {
    // Equal to 0 to end the timing
    this.formatOutput(true)
    return false
  }

  // Output time
  this.formatOutput()
  // Recursion
  this.timerId = setTimeout(this.reTime.bind(this), 1000)
}

/**
 *  Output time
 */
Timer.prototype.formatOutput = function (end) {
  if (end) {
    this.callback('00:00:00')
    return '00:00:00'
  }
  // Get hours, minutes, seconds
  let h = parseInt(this.time / 3600)
  let m = parseInt((this.time - h * 3600) / 60)
  let s = this.time - h * 3600 - m * 60

  // Formatting
  // eslint-disable-next-line no-unused-expressions
  h < 10 ? h = `0${h}` : ''
  // eslint-disable-next-line no-unused-expressions
  m < 10 ? m = `0${m}` : ''
  // eslint-disable-next-line no-unused-expressions
  s < 10 ? s = `0${s}` : ''

  this.callback(`${h}:${m}:${s}`)
  return `${h}:${m}:${s}`
}
