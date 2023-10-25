import { PalleteIcon, ImageIcon, InventoryIcon, DeleteIcon } from '../Note/assets/images/Icons'
import { useRef } from 'react'
import { usePlaceholder } from '../../hooks/usePlaceholder'

export default function NewNote ({ closeHandler, addNote }) {
  const noteTextRef = useRef()
  const noteTitleRef = useRef()
  const { isUserTyping, handleNotePlaceholder } = usePlaceholder({ noteTextRef })

  const closeAndSave = () => {
    closeHandler()
    addNote({ title: noteTitleRef.current.value, bodyText: noteTextRef.current.textContent })
  }

  return (
    <div className='new-note' onClick={(e) => e.stopPropagation()}>
      <input type='text' ref={noteTitleRef} name='note-title' className='note-title' placeholder='Title' autoComplete='false' />
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
