import { combineReducers } from 'redux'
import quizReducer from './fetchQuizSlice'
import modalReducer from './modalSlice'

const rootReducer = combineReducers({
  data: quizReducer,
  modalState: modalReducer,
})

export default rootReducer
