import { useState, useEffect } from 'react'

const SingleColor = ({ rgb, weight, type, hex }) => {
  const [alert, setAlert] = useState(false)
  const bgc = rgb.join(',')

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false)
    }, 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [alert])

  function handleAlert() {
    setAlert(true)
    navigator.clipboard.writeText(`#${hex}`)
  }

  return (
    <article
      className={type === 'shade' ? 'color color-light' : 'color'}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={() => handleAlert()}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
