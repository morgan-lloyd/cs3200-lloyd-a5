const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuizById = (qId) => questionsModel.findById(qId)
const findQuestionsForQuiz = (qid) => questionsModel.find({quizId:qId})
module.exports = { findAllQuizzes, findQuizById, findQuestionsForQuiz }