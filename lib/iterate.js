const isValid = require('./is-valid')
const increment = require('./increment')

const iterate = async (startingIP, endingIP, callback, isSync) => {
  const hasValidIps = isValid(startingIP) && isValid(endingIP)

  if (hasValidIps) {
    let ip = startingIP
    let endloopIp = increment(endingIP)

    while (ip !== endloopIp) {
      if (isSync) {
        await callback(ip)
      } else {
        callback(ip)
      }
      ip = increment(ip)
    }
  }
}

module.exports = iterate
