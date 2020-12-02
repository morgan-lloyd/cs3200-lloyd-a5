const mongoose = require('mongoose')
const questionSchema = mongoose.Schema({
   question: String,
   options: [String],
   quizId: String
}, {collection: 'questions'})
module.exports = questionSchema