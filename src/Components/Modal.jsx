export default function Modal({ onClose }) {
  return (
    <div 
      className='modal-overlay'>
      <div className='modal-container'>
        <div className='modal-header'>Congratulations!</div>
        <div className='modal-message'>You have been added to the waitlist</div>
        <div 
          className='modal-close'
          onClick={onClose}
          >Close</div>
      </div>
    </div>
  )
}