// Components
import SetupForm from './components/SetupForm'
import Loading from './components/Loading'
import Modal from './components/Modal'
import Quiz from './components/Quiz'

// Redux
import { useSelector } from 'react-redux'

function App() {
  const { error, isLoading, quizzes } = useSelector((state) => state.data)

  if (isLoading) return <Loading />
  if (error !== null) return <h2>Request was rejected due to server error</h2>

  return (
    <main>
      {!quizzes.length && <SetupForm />}
      <Modal />
      {quizzes.length !== 0 ? <Quiz /> : <></>}
    </main>
  )
}

export default App
