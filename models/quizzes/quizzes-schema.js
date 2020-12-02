const mongoose = require('mongoose')
const quizSchema = mongoose.Schema({
   title: String,
   quizId: String
}, {collection: 'quizzes'})
module.exports = quizSchema