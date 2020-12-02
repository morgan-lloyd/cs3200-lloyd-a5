const quizzesModel = require('../models/quizzes/quizzes-model.js')
const findAllQuizzes = () => quizzesModel.find()
const findQuizById = (quizId) => quizzesModel.find({quizId:quizId})
module.exports = { findAllQuizzes, findQuizById }