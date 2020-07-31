import os from 'os'
import path from 'path'

import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

import { name } from '../../package.json'

const dataPath = path.resolve(os.homedir(), '.icore', name)

const db = new JsonDB(
  new Config(`${dataPath}/config`, true, (process.env.NODE_ENV === 'development'), '/')
)

export default {
  save (data, path = '/') {
    try {
      db.push(path, data)
    } catch (e) {
      console.log(`[database]:\t${e.toString()}`)
    }
  },

  load (path = '/') {
    try {
      return db.getData(path)
    } catch (e) {
      console.log(`[database]:\t${e.toString()}`)
      return {}
    }
  }
}
