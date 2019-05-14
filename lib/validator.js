'use strict'

var validator = {
  /**
   * 
   * @param {Array} args Array of arguments
   */
  validateArguments: function (data) {
    var args = data.args
    if (!args) {
      return new Error('Arguments not found')
    }
    switch (args.length) {
      case 0:
        return new Error('Please pass arguments')
      case 1:
        if (args[0].constructor === Function) {
          return new Error('Data type [Function] is not allowed in the first argument')
        }
        break
      case 2:
        if (args[0].constructor === Function) {
          return new Error('Data type [Function] is not allowed in the first argument')
        }
        if (args[1].constructor !== Function) {
          return new Error('Only data type [Function] is allowed in second argument')
        }
        break
      default:
        return new Error('arguments greater than 2 are not supported yet')
    }
  }
}

module.exports = validator
