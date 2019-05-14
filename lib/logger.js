'use strict'

var Logger = function () {
  this.canPrint = false
}

Logger.prototype.log = function () {
  if (this.canPrint) {
    console.log('LOG:', ...arguments)
  }
}

Logger.prototype.setCanPrint = function (value) {
  this.canPrint = value
}

module.exports = new Logger()
