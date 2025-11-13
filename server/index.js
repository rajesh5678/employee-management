// import express from 'express'
// import cors from 'cors'

// const app = express()
// app.use(cors())
// app.use(express.json())

// app.listen(process.env.PORT, ()=>{
//     console.log(`Server is running on port ${process.env.PORT}`)
// })

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config() // Loads variables from .env file

const app = express()
app.use(cors())
app.use(express.json())

// ✅ Connect to MongoDB
const mongoURL = process.env.MONGO_URL

mongoose.connect(mongoURL)
  .then(() => console.log('✅ Connected to MongoDB successfully'))
  .catch(err => console.error('❌ MongoDB connection failed:', err))

// Example route
app.get('/', (req, res) => {
  res.send('Server is running and connected to MongoDB!')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`)
})
