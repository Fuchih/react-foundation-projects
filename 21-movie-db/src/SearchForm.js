import { useState } from 'react'
import { useGlobalContext } from './context'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const [value, setValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (value === '') return
    setSearchTerm(value)
    setValue('')
  }

  return (
    <form className="search-form">
      <h2>search movies</h2>
      <input
        type="text"
        className="form-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchForm
