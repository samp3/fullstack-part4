const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')
const config = require('./utils/config')
const usersRouter = require('./controllers/users')

//laita urliin user ja pass
const mongoUrl = 'mongodb://fullstack:sekred@ds243008.mlab.com:43008/fullstack-blog'
mongoose.connect(mongoUrl)
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())

app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)



const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})