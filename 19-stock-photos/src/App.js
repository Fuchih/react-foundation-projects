import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [hasNewImages, setHasNewImages] = useState(false)

  async function fetchData() {
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`

    if (query) url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    else url = `${mainUrl}${clientID}${urlPage}`

    try {
      setLoading(true)
      const data = await (await fetch(url)).json()
      setPhotos((prevPhotos) => {
        if (query && page === 1) return data.results
        else if (query) return [...prevPhotos, ...data.results]
        else return [...prevPhotos, ...data]
      })
      setHasNewImages(false)
      setLoading(false)
    } catch (error) {
      alert('request was rejected due to server error...')
      setHasNewImages(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  function loadMoreImages() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setHasNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', loadMoreImages)
    return () => window.removeEventListener('scroll', loadMoreImages)
  }, [])

  useEffect(() => {
    if (!hasNewImages) return
    setPage((prevPage) => prevPage + 1)
  }, [hasNewImages])

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return
    if (page === 1) fetchData()
    setPage(1)
  }

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch style={{ cursor: 'pointer' }} />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.length ? (
            photos.map((item, index) => <Photo key={index} {...item} />)
          ) : (
            <h2>no result found</h2>
          )}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  )
}

export default App
