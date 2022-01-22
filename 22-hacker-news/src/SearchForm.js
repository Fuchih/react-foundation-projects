import { useState } from 'react'
import { useGlobalContext } from './context'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
  const [value, setValue] = useState('Vue')

  const { handleSearch } = useGlobalContext()

  function handleSubmit(e) {
    e.preventDefault()
    handleSearch(value)
    setValue('')
  }

  return (
    <form className="search-form">
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="submit-btn" onClick={handleSubmit}>
        <FaSearch />
      </button>
    </form>
  )
}

export default SearchForm
