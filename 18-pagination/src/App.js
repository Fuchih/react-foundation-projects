import { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import Loading from './Loading'

function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [follower, setFollower] = useState([])

  useEffect(() => {
    if (loading) return
    setFollower(data[page])
  }, [loading, page, data])

  function pervPage() {
    setPage((prev) => {
      let next = prev - 1
      if (next < 0) return (next = data.length - 1)
      return next
    })
  }

  function nextPage() {
    setPage((perv) => {
      let next = perv + 1
      if (next > data.length - 1) return (next = 0)
      return next
    })
  }

  function handlePage(index) {
    setPage(index)
  }

  if (loading)
    return (
      <main>
        <div className="section-title">
          <h1>pagination</h1>
          <div className="underline"></div>
        </div>
        <Loading />
      </main>
    )

  return (
    <main>
      <div className="section-title">
        <h1>pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="btn-container">
          <button className="prev-btn" onClick={pervPage}>
            prev
          </button>
          {data.map((_, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? 'active-btn' : ''}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            )
          })}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
        <div className="container">
          {follower.map((item) => (
            <Follower {...item} key={item.id} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
