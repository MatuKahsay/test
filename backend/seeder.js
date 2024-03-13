import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import housings from './data/housings.js' // Updated to use housing data
import User from './models/userModel.js'
import Housing from './models/housingModel.js' // Updated to use Housing model
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Housing.deleteMany() // Only deleting Housing and User data
    await User.deleteMany()

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleHousings = housings.map((housing) => {
      return { ...housing, user: adminUser }
    })

    await Housing.insertMany(sampleHousings) // Inserting modified housing data

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Housing.deleteMany() // Only deleting Housing and User data
    await User.deleteMany()

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
