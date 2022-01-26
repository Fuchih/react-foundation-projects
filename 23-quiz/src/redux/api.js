import axios from 'axios'

// const tempUrl = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'
const API_ENDPOINT = 'https://opentdb.com/api.php?'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

export const getQuiz = async ({ amount, category, difficulty }) => {
  const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
  return await axios.get(url)
}
