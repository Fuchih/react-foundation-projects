import { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { fetchDataStart } from '../redux/fetchQuizSlice'

const SetupForm = () => {
  const dispatch = useDispatch()
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  })

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(fetchDataStart(quiz))
  }

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setQuiz({ ...quiz, [name]: value })
  }

  return (
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>setup quiz</h2>

        {/* amount */}
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-input"
            min="1"
            max="50"
            value={quiz.amount}
            onChange={handleChange}
          />
        </div>

        {/* category */}
        <div className="form-control">
          <label htmlFor="category">category</label>
          <select
            name="category"
            id="category"
            className="form-input"
            value={quiz.category}
            onChange={handleChange}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>

        {/* difficulty */}
        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="form-input"
            value={quiz.difficulty}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button
          type="submit"
          className="submit-btn"
          onClick={(e) => handleSubmit(e)}
        >
          start
        </button>
      </form>
    </section>
  )
}

export default SetupForm
