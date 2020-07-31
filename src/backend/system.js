import os from 'os'

import prettyBytes from 'pretty-bytes'

const _cpu = os.cpus()

export default {
  os: {
    type: os.type(),
    release: os.release()
  },

  cpu: {
    model: _cpu[0].model,
    cores: _cpu.length
  },

  memory: {
    total: prettyBytes(os.totalmem())
  },

  network: Object.values(os.networkInterfaces()),

  user: os.userInfo()
}
