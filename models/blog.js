const mongoose = require('mongoose')

const Blog = mongoose.model('Blog', {
    title: String,
    author: String,
    url: String,
    likes: Number
})







module.exports = Blog
const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

noteSchema.statics.format = (note) => {
  return {
    id: note._id,
    content: note.content,
    date: note.date,
    important: note.important
  }
}

const Note = mongoose.model('Note', noteSchema)

module.exports = Note