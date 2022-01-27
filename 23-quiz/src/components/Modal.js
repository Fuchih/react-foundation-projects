import { useSelector, useDispatch } from 'react-redux'
import { handleModalOpen } from '../redux/modalSlice'
import { fetchDataSuccess } from '../redux/fetchQuizSlice'

const Modal = () => {
  const dispatch = useDispatch()
  const { openModal, percentage } = useSelector((state) => state.modalState)

  function closeModal() {
    dispatch(handleModalOpen(false))
    dispatch(fetchDataSuccess([]))
  }

  return (
    <div className={openModal ? 'modal-container isOpen' : 'modal-container'}>
      <div className="modal-content">
        <h2>{Number(percentage) >= 60 ? 'congrats!' : 'you can do better!'}</h2>
        <p>You answered {percentage}% of questions correctly</p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  )
}

export default Modal
