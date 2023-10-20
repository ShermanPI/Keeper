import { useRef, useState } from 'react'
import { CheckIcon, DeleteIcon, ImageIcon, InventoryIcon, PalleteIcon, PushPinIcon } from './assets/images/Icons'

export default function NoteForm ({ className, children, title, noteBody, onSave = function noop () {} }) {
  const [amplified, setAmplified] = useState(false)
  const noteTextRef = useRef()
  const [isUserTyping, setIsUserTyping] = useState(false)

  const handleNoteClick = (e) => {
    e.stopPropagation()
    if (className !== 'invisible-note') {
      setAmplified(true)
    }
    // console.log('click to a note ✅', noteTextRef.current.parentElement.parentElement)
  }

  const handleCloseAndSave = (e) => {
    e.stopPropagation()
    setAmplified(false)
    setIsUserTyping(false)
    onSave({ noteText: noteTextRef.current.textContent })
  }

  const handleNotePlaceholder = () => {
    // even this executes a lot react doesnt make the render of setIsUserTyping cause the new state is the same as the last state
    if (!noteTextRef.current.textContent) {
      setIsUserTyping(false)
    } else {
      setIsUserTyping(true)
    }
  }

  return (
    <>
      <div className={`note ${amplified ? 'amplified-note' : ''} ${className}`} onClick={handleNoteClick}>
        <div className='note-top-icons'>
          <div className='select-note-icon'>
            <CheckIcon />
          </div>
          <div className='file-note-icon'>
            <PushPinIcon />
          </div>
        </div>

        <input type='text' name='note-title' defaultValue={title} className='note-title' placeholder='Title' />
        <div className='note-text' name='note-text'>
          <div className='note-text-placeholder'>{(noteBody || isUserTyping) ? '' : 'Empty Note...'}</div>
          <p ref={noteTextRef} contentEditable='true' role='textarea' suppressContentEditableWarning onInput={handleNotePlaceholder}>
            {noteBody}
          </p>
        </div>

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
          <button onClick={handleCloseAndSave} className='close-note-btn'>Close</button>
        </div>
        {children}
      </div>
      {amplified ? <div className='amplified-note-background' onClick={handleCloseAndSave} /> : ''}
    </>
  )
}
