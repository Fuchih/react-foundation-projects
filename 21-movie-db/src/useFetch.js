import axios from 'axios'
import { useState, useEffect } from 'react'
const baseURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=`

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchData(`${baseURL}${urlParams}`)
  }, [urlParams])

  async function fetchData(url) {
    setLoading(true)
    try {
      const res = await axios.get(url)
      const { results } = res.data
      setMovies(results)
      setLoading(false)
    } catch (error) {
      alert('Request was rejected due to server error...')
      setLoading(false)
    }
  }

  return { loading, movies }
}

export default useFetch
