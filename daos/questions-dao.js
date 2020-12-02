const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qId) => questionsModel.find({quizId:qId})
const findQuestionsForQuiz = (qzid) => questionsModel.find({quizId:qzId})
module.exports = { findAllQuizzes, findQuizById, findQuestionsForQuiz }