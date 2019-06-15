'use strict'

var helpers = require('./helpers')
var logger = require('./logger')
var utils = {
  /**
   * 
   * @param {JSON} data // Data can be any json data structure
   * @returns {JSON} // returns JSON
   */
  toJSON: function (data) {
    logger.log('Deep cloning started')
    logger.log('Starting deep clone for the input data')
    var response = helpers.deepCloneJSON(data)
    logger.log('Deep cloning completed')
      return response
  },
  debug: function () {
    logger.setCanPrint(true)
  }
}

module.exports = utils
