'use strict'

var helpers = require('./helpers')
var validator = require('./validator')
var logger = require('./logger')
var utils = {
  /**
   * 
   * @param {JSON} data // Data can be any json data structure
   * @returns {JSON} // returns JSON
   */
  toJSON: function (data, callback) {
    var args = arguments
    return new Promise(function (resolve, reject) {
      logger.log('Deep cloning started')
      logger.log('Validating Arguments')
      var error = validator.validateArguments({ args })
      if (error) {
        logger.log('Got Error while validating ', error)
        return reject(error)
      }
      logger.log('Starting deep clone for the input data')
      helpers.deepCloneJSON(data).then(function (response) {
        if (callback) {
          callback(null, response)
        } else {
          resolve(response)
        }
        logger.log('Deep cloning completed')
        return
      }).catch(function (error) {
        var customError = new Error('Some Error occured')
        if (callback) {
          callback(customError)
        } else {
          reject(customError)
        }
        logger.log('Error occured while deep cloning ', error)
        return
      })
    })
  },
  debug: function () {
    logger.setCanPrint(true)
  }
}

module.exports = utils
