import { useRef, useState } from 'react'
import { CheckIcon, DeleteIcon, ImageIcon, InventoryIcon, PalleteIcon, PushPinIcon } from './assets/images/Icons'
import './assets/style/note.css'

export default function Note ({ children, title }) {
  const [amplified, setAmplified] = useState(false)
  const cloneRef = useRef()

  const handleNoteClick = (e) => {
    e.stopPropagation()
    setAmplified(true)
  }

  const handleBackgroundClick = () => {
    setAmplified(false)
  }

  return (
    <>
      <div ref={cloneRef} className='note invisible-note'>
        <div className='note-top-icons'>
          <div className='select-note-icon'>
            <CheckIcon />
          </div>
          <div className='file-note-icon'>
            <PushPinIcon />
          </div>
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

        {/* REAL NOTE */}
        <div className={`note ampliable-note ${amplified ? 'amplified-note' : ''}`} onClick={handleNoteClick}>
          <div className='note-top-icons'>
            <div className='select-note-icon'>
              <CheckIcon />
            </div>
            <div className='file-note-icon'>
              <PushPinIcon />
            </div>
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
      </div>
      <div className={`note-container ${amplified ? 'amplified-note-background' : ''}`} onClick={handleBackgroundClick} />
    </>
  )
}
