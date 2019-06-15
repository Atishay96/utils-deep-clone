'use strict'

var helpers = {
  deepCloneJSON: function (data) {
    var self = this
    if (!data) {
      return data
    }
    switch (data.constructor) {
      case Object:
        var serialized = {}
        var response = Object.keys(data).map(function (key) {
          var resp = self.deepCloneJSON(data[key])
          serialized[key] = resp
          return
        })
        return serialized
      case Array:
        var response = data.map(function (element) {
          return self.deepCloneJSON(element)
        })
        return response
      default:
        if (data instanceof Error) {
          var errorProperties = Object.getOwnPropertyNames(data)
          var error = Object.assign({}, {
            message: data.message,
            stack: data.stack
          })
          errorProperties.map(value => {
            if (value !== 'stack' && value !== 'message') {
              error[value] = data[value]
            }
          })
          return error
        }
        data = JSON.parse(JSON.stringify(data))
        return data
    }
  }
}

module.exports = helpers
