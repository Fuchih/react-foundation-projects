import { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

function App() {
  const [tourData, setTourData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTourData()
  }, [])

  const fetchTourData = async () => {
    setLoading(true)

    try {
      const res = await (await fetch('http://localhost:8080/api')).json()
      setTourData(res)
      setLoading(false)
    } catch (error) {
      alert(
        'Oops! You need to start the server \n open terminal : 1.cd server 2. node index.js'
      )
      setLoading(false)
    }
  }

  function removeTour(id) {
    const newTourData = tourData.filter((tour) => tour.id !== id)
    setTourData(newTourData)
  }

  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    )
  }

  if (!tourData.length) {
    return (
      <main>
        <div className="title">
          <h2>No Tour Left</h2>
          <button className="btn" onClick={() => fetchTourData()}>
            Refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tourData={tourData} removeTour={removeTour} />
    </main>
  )
}

export default App
