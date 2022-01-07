import { useEffect } from 'react'

const Alert = ({ alert, setAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert('')
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [alert, setAlert])

  return (
    <>
      {
        alert === 'added' ? (<p className="alert alert-success">item added to the list</p>)
        :
        alert === 'edited' ? (<p className="alert alert-success">value changed</p>)
        :
        alert === 'noValue' ? (<p className="alert alert-danger">please enter value</p>)
        :
        alert === 'removeItem' ? (<p className="alert alert-danger">item removed</p>)
        :
        alert === 'clearItems' ? (<p className="alert alert-danger">empty list</p>)
        :
        ('')
      }
    </>
  )
}

export default Alert
