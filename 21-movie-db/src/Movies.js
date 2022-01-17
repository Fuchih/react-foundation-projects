import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const Movies = () => {
  const { movies, loading, noImg, imgURL } = useGlobalContext()

  if (loading) return <div className="loading"></div>
  if (movies.length === 0) return <h2>no movie found</h2>

  return movies.map((item) => {
    const { title, release_date, poster_path } = item

    return (
      <Link to={`/${item.id}`} key={item.id} className="movie">
        <img
          src={poster_path ? `${imgURL}${poster_path}` : noImg}
          alt={title}
        />
        <div className="movie-info">
          <h4 className="title">{title}</h4>
          <p>{`${release_date.substring(0, 4)}`}</p>
        </div>
      </Link>
    )
  })
}

export default Movies
