import { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log('Unable to parse color from string')
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
            className={error ? 'error' : null}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          const hex = color.hex
          return <SingleColor key={index} {...color} hex={hex} />
        })}
      </section>
    </>
  )
}

export default App
