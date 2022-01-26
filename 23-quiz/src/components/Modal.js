import { useSelector } from 'react-redux'

const Modal = () => {
  useSelector((state) => console.log(state.modalState))

  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>You answered 0% of questions correctly</p>
        <button className="close-btn">play again</button>
      </div>
    </div>
  )
}

export default Modal
