import { PalleteIcon, ImageIcon, InventoryIcon, DeleteIcon } from '../Note/assets/images/Icons'
import { useState, useRef } from 'react'

export default function NewNote ({ closeHandler }) {
  const noteTextRef = useRef()
  const [isUserTyping, setIsUserTyping] = useState(false)

  const handleNotePlaceholder = () => {
    // even this executes a lot react doesnt make the render of setIsUserTyping cause the new state is the same as the last state
    if (!noteTextRef.current.textContent) {
      setIsUserTyping(false)
    } else {
      setIsUserTyping(true)
    }
  }

  const closeAndSave = () => {
    closeHandler()
  }

  return (
    <div className='new-note' onClick={(e) => e.stopPropagation()}>
      <input type='text' name='note-title' className='note-title' placeholder='Title' />
      <div className='note-text' name='note-text'>
        <div className='note-text-placeholder'>{(isUserTyping) ? '' : 'Empty Note...'}</div>
        <p ref={noteTextRef} contentEditable='true' role='textarea' suppressContentEditableWarning onInput={handleNotePlaceholder} />
      </div>

      <div className='new-note-buttons-container'>
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
        <button className='close-note-btn' onClick={closeAndSave}>Close</button>
      </div>
    </div>
  )
}
