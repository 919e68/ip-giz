const isValidIP = require('../lib/is-valid')
const increment = require('../lib/increment')
const iterate = require('../lib/iterate')

iterate('192.168.1.1', '192.168.1.244', (ip) => {
  console.log(ip)
}, true)
