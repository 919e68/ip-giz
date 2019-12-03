const isValid = require('./is-valid')

const increment = (ip) => {
  let result = null

  if (isValid(ip)) {
    const ipArr = ip.split('.')
    for (let i = ipArr.length; i > 0; i--) {
      const octet = parseInt(ipArr[i-1])
      if (octet < 255) {
        ipArr[i-1] = octet + 1
        break
      }
      ipArr[i-1] = 0
    }
    result = ipArr.join('.')
  }

  return result
}

module.exports = increment