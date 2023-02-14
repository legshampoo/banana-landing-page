import { useState } from 'react'
import Modal from './Modal'

export default function Body() {
  const [isShowing, setIsShowing] = useState(false)

  const onClick = () => {
    setIsShowing(!isShowing)
  }

  return (
    <div className="body">
      <div className="hero-text">
        BANANANA NFT's
      </div>
      <div className='message'>
        We're launching overpriced jpegs for people who like bananas.
      </div>
      <div 
        className='cta'
        onClick={() => onClick()}>
        UNLOCK EARLY ACCESS
      </div>
      { isShowing? <Modal onClose={onClick} /> : null }
    </div>
  )
}