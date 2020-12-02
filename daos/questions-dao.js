const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qId) => questionsModel.findById(qId)
const findQuestionsForQuiz = (qzId) => questionsModel.find({quizId: qzId})
module.exports = {findAllQuestions, findQuestionById, findQuestionsForQuiz }