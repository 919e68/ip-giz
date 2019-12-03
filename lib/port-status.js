const Socket = require('net').Socket

const portStatus = (ip, port) => {
  return new Promise((resolve, reject) => {
    const socket = new Socket()
    let status = null
    let timeout = 400

    socket.on('connect', () => {
      status = 'open'
      socket.destroy()
    })

    socket.setTimeout(timeout)
    socket.on('timeout', () => {
      status = 'closed'
      socket.destroy()
    })

    socket.on('error', () => {
      status = 'closed'
    })

    socket.on('close', () => {
      resolve(status)
    })

    socket.connect(port, host)
  })
}

module.exports = portStatus
