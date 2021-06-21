const mongoose =  require('mongoose')
const dotenv = require('dotenv')
const resources = require('./data/resource')
const Resource = require('./models/resource')

dotenv.config()


const importData = async () => {
  try {

    const createdResources = await Resource.insertMany(resources)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Resource.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}