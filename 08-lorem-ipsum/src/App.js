import { useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [texts, setTexts] = useState([])

  function changeParagraphs(e) {
    const {
      target: { value }
    } = e

    setCount(Number(value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setTexts(data.slice(0, count))
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => changeParagraphs(e)}
        />
        <button
          className={count < 0 || count > data.length ? 'btn-red' : 'btn'}
          disabled={count < 0 || count > data.length ? true : false}
        >
          {count < 0 || count > data.length ? 'forbidden' : 'generate'}
        </button>
      </form>
      <article className="lorem-text">
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </article>
    </section>
  )
}

export default App
