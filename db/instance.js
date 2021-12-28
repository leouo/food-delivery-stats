import { Low, JSONFile } from 'lowdb'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import config from '../config.js'

const __dirname = dirname(fileURLToPath(import.meta.url));

const createDbInstance = ({ fileName }) => {
  const file = join(__dirname, `../${fileName}.json`)
  const adapter = new JSONFile(file)

  return new Low(adapter)
}

const setDbSchema = async dbInstance => {
  await dbInstance.read()
  dbInstance.data ||= config.dbSchema
  await dbInstance.write()
}

const dbInstance = createDbInstance({
  fileName: 'db',
})

await setDbSchema(dbInstance)

export default dbInstance
