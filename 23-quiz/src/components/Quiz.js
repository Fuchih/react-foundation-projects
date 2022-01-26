import { useState } from 'react'
import { useSelector } from 'react-redux'

const Quiz = () => {
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)

  const { quizzes } = useSelector((state) => state.data)
  const { question, correct_answer, incorrect_answers } = quizzes[index]

  const answers = [...incorrect_answers]
  const randomIndex = Math.floor(Math.random() * 4)
  answers.push(answers[randomIndex])
  answers[randomIndex] = correct_answer

  function nextQuiz() {
    setIndex((prevIndex) => {
      const index = prevIndex + 1
      if (index > quizzes.length - 1) {
        return 0
      } else {
        return index
      }
    })
  }

  function checkAnswer(value) {
    if (value) setCorrect((prev) => prev + 1)
    nextQuiz()
  }

  return (
    <section className="quiz">
      <p className="correct-answers">
        correct answers : {correct}/{index}
      </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="btn-container">
          {answers.map((answer, index) => (
            <button
              className="answer-btn"
              key={index}
              onClick={() => checkAnswer(answer === correct_answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>
      </article>
      <button className="next-question" onClick={nextQuiz}>
        next question
      </button>
    </section>
  )
}

export default Quiz
