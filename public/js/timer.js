
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

/**
 * 暂停/停止
 */
Timer.prototype.pause = function () {
  if (this.timerId) {
    clearTimeout(this.timerId)
    this.timerId = null
  }
}

/**
 * 刷新时间
 * @return {string} 时间
 */
Timer.prototype.reTime = function () {
  if (this.type) {
    this.time++
  } else if (this.time > 0) {
    this.time--
  } else {
    // 等于零结束计时
    this.formatOutput(true)
    return false
  }

  // 输出时间
  this.formatOutput()
  // 递归
  this.timerId = setTimeout(this.reTime.bind(this), 1000)
}

/**
 * 输出时间
 */
Timer.prototype.formatOutput = function (end) {
  if (end) {
    this.callback('00:00:00')
    return '00:00:00'
  }
  // 获取时分秒
  let h = parseInt(this.time / 3600)
  let m = parseInt((this.time - h * 3600) / 60)
  let s = this.time - h * 3600 - m * 60

  // 格式化
  // eslint-disable-next-line no-unused-expressions
  h < 10 ? h = `0${h}` : ''
  // eslint-disable-next-line no-unused-expressions
  m < 10 ? m = `0${m}` : ''
  // eslint-disable-next-line no-unused-expressions
  s < 10 ? s = `0${s}` : ''

  this.callback(`${h}:${m}:${s}`)
  return `${h}:${m}:${s}`
}
