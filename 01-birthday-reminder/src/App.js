import { useState, useEffect } from 'react'
import data from './data'
import List from './List'

export default function App() {
  const [birthdays, setBirthdays] = useState(data)

  useEffect(() => {
    setBirthdays(data)
  }, [])

  function handleClearBtn() {
    setBirthdays([])
  }

  return (
    <main>
      <section className="container">
        <h3>{birthdays.length} birthdays today</h3>
        <List birthdays={birthdays}></List>
        <button onClick={() => handleClearBtn()}>Clear All</button>
      </section>
    </main>
  )
}
