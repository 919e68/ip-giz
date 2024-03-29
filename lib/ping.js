const os = require('os')
const spawn = require('child_process').spawn
const isValid = require('./is-valid')

const checkTime = /time[=<]/
const checkTtl = /ttl=/

const ping = (ip, tries = 1) => {
  return new Promise((resolve, reject) => {
    try {
      if (isValid(ip)) {
        const platform = os.platform()
        let pingArgs = [ip]
        let countFlag = '-w'

        if (platform == 'win32') {
          countFlag = '-n'
        } else if (platform == 'darwin') {
          countFlag = '-c'
        }

        pingArgs = pingArgs.concat([countFlag, tries])

        const ping = spawn('ping', pingArgs)
        let result = false
        let data = ''

        ping.stdout.on('data', (buffer) => {
          data += buffer.toString().toLowerCase()
        })

        ping.stdout.on('end', () => {
          if (checkTime.test(data) && checkTtl.test(data)) {
            result = true
          }
          ping.kill()
          resolve(result)
        })

      } else {
        resolve(false)
      }
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = ping
