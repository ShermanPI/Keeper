import { useState } from 'react'
import { CheckIcon, DeleteIcon, ImageIcon, InventoryIcon, PalleteIcon, PushPinIcon } from './assets/images/Icons'
import './assets/style/note.css'

export default function Note ({ children, title }) {
  const [amplified, setAmplified] = useState(false)

  const handleClick = () => {
    setAmplified(!amplified)
  }

  return (
    <div className={`note ${amplified ? 'amplified-note' : ''}`} onClick={handleClick}>
      <div className='select-note-icon'>
        <CheckIcon />
      </div>
      <div className='file-note-icon'>
        <PushPinIcon />
      </div>
      <b>{title}</b>
      <p className='note-text'>{children}</p>
      <div className='note-buttons-container'>
        <div className='note-action-button'>
          <PalleteIcon />
        </div>
        <div className='note-action-button'>
          <ImageIcon />
        </div>
        <div className='note-action-button'>
          <InventoryIcon />
        </div>
        <div className='note-action-button'>
          <DeleteIcon />
        </div>
      </div>
    </div>
  )
}
