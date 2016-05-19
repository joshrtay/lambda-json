/**
 * Modules
 */

const isObject = require('@f/is-object')
const isFunction = require('@f/is-function')
const isGenerator = require('@f/is-generator')

/**
 * Expose lambdaJson
 */

module.exports = lambdaJSON

/**
 * Lambda JSON
 */

function * lambdaJSON (val, props) {
  if (isObject(val)) {
    var obj = {}
    for (var key in val) {
      obj[key] = yield lambdaJSON(val[key], props)
    }
    return obj
  } else if (isGenerator(val)) {
    return yield val(props)
  } else if (isFunction(val)) {
    return val(props)
  }  else {
    return val
  }
}
