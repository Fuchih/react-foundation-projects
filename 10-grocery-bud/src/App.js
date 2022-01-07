import { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item, setItem] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState()

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  function inputValue(e) {
    setItem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!item) {
      setAlert('noValue')
      return
    }

    if (editID) {
      const editedList = list.map((data) => {
        if (data.id === editID) return { ...item, id: Date.now(), title: item }
        return data
      })
      setList(editedList)

      setEditID(null)
      setItem('')
      setAlert('edited')
      return
    }

    const newItem = { id: Date.now(), title: item }
    setList([newItem, ...list])
    setItem('')
    setAlert('added')
  }

  function getLocalStorage() {
     let list = JSON.parse(localStorage.getItem('list') || '[]')
     return list
  }

  function removeItem(id) {
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
    setAlert('removeItem')
  }

  function editItem(id) {
    const specificItem = list.find((item) => item.id === id)
    setItem(specificItem.title)
    setEditID(id)
  }

  function clearItems() {
    setList([])
    setAlert('clearItems')
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <Alert alert={alert} setAlert={setAlert} />
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            onChange={inputValue}
            value={item}
          />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearItems}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
