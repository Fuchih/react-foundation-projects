import { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock
} from 'react-icons/fa'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://avatars.githubusercontent.com/u/51282481?v=4'

const initialUser = {
  name: 'Fuchih Tai',
  street: '18XXX Rd',
  email: 'xxx@example.com',
  phone: 'xxx-xxx-xxx',
  age: 28,
  password: 'XXX',
  image: defaultImage
}

function App() {
  const [user, setUser] = useState(initialUser)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('name')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    try {
      const res = await (await fetch(url)).json()
      const { results } = res

      const {
        name: { first, last },
        location: {
          street: { number, name }
        },
        email,
        phone,
        dob: { age },
        login: { password },
        picture: { large: image }
      } = results[0]

      const newUser = {
        name: `${first} ${last}`,
        email,
        age,
        street: `${number} ${name}`,
        phone,
        password,
        image
      }

      setUser(newUser)
      setLoading(false)
    } catch (error) {
      alert('Request was rejected due to server error...')
      setUser(initialUser)
      setLoading(false)
    }
  }

  function handleValue(e) {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
    }
  }

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img src={user.image} alt="random user" className="user-img" />
          <p className="user-title">{`My ${title} is`}</p>
          <p className="user-value">{user[title]}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchData}>
            {loading ? 'Loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
