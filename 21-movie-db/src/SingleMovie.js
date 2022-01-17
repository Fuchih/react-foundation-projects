import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from './context'

const SingleMovie = () => {
  const { imgURL, noImg } = useGlobalContext()
  const { id } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchData() {
    try {
      setLoading(true)
      const res = await axios.get(url)
      setMovie(res.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  if (loading) return <div className="loading"></div>
  else if (!movie.title) {
    return (
      <section>
        <h2>no movie found</h2>
        <Link className="btn" to="/">
          back to movies
        </Link>
      </section>
    )
  } else {
    const { backdrop_path, title, overview, release_date } = movie
    return (
      <section className="single-movie">
        <img
          src={backdrop_path ? `${imgURL}${backdrop_path}` : noImg}
          alt={title}
        />
        <div className="single-movie-info">
          <h2>{title}</h2>
          <p>{overview}</p>
          <h4>{release_date}</h4>
          <Link className="btn" to="/">
            back to movies
          </Link>
        </div>
      </section>
    )
  }
}

export default SingleMovie
