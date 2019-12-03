const isValidIP = (ip) => {
  let result = true
  const ipArr = ip.split('.')

  if (ipArr.length == 4) {
    for (let i = 0; i < ipArr.length; i++) {
      let octet = parseInt(ipArr[i])

      if (isNaN(octet) || octet < 0 || octet > 255) {
        result = false
        break
      }
    }
  } else {
    result = false
  }

  return result
}

module.exports = isValidIP
