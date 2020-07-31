import prettyBytes from 'pretty-bytes'

import backend from './backend'
import { displayName, version, author, copyright } from '../package.json'

process.once('loaded', () => (global.__core__ = {
  prettyBytes,

  system: backend.system,
  window: backend.window,
  database: backend.database,

  app: { title: displayName, version, author, copyright }
}))
