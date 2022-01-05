import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  let initIndex = 0
  let [index, setIndex] = useState(initIndex)
  const { image, job, name, text } = people[index]

  function prevPerson() {
    if (index > 0) setIndex(index - 1)
    else setIndex(people.length - 1)
  }

  function nextPerson() {
    if (index === people.length - 1) setIndex(0)
    else setIndex(index + 1)
  }

  function randomPerson() {
    let randomIndex = Math.floor(Math.random() * (people.length - 1 - 0) + 0)
    if (randomIndex === index) randomIndex = index + 1
    setIndex(randomIndex)
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={() => prevPerson()} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={() => nextPerson()} />
        </button>
      </div>
      <button className="random-btn" onClick={() => randomPerson()}>
        Surprise Me
      </button>
    </article>
  )
}

export default Review
