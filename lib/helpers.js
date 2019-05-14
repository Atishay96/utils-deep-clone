'use strict'

var helpers = {
  deepCloneJSON: function (data) {
    var self = this
    return new Promise(function (resolve, reject) {
      if (data) {
        switch (data.constructor) {
          case Object:
            var serialized = {}
            var response = Object.keys(data).map(async function (key) {
              var resp = await self.deepCloneJSON(data[key])
              serialized[key] = resp
              return
            })
            Promise.all(response).then(function () {
              resolve(serialized)
            })
            break
          case Array:
            var response = data.map(function (element) {
              return self.deepCloneJSON(element)
            })
            Promise.all(response).then(function (serialized) {
              resolve(serialized)
            })
            break
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
              return resolve(error)
            }
            data = JSON.parse(JSON.stringify(data))
            resolve(data)
            break
        }
      } else {
        return resolve(data)
      }
    })
  }
}

module.exports = helpers
