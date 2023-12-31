import { PalleteIcon, ImageIcon, InventoryIcon, DeleteIcon } from '../Note/assets/images/Icons'
import { useContext, useRef } from 'react'
import { usePlaceholder } from '../../hooks/usePlaceholder'
import { session } from '../../context/contextLogin'

export default function NewNote ({ closeHandler, addNote }) {
  const noteTitleRef = useRef()
  const noteTextRef = useRef()
  const { loggedUser } = useContext(session)
  const { isUserTyping, handleNotePlaceholder } = usePlaceholder({ noteTextRef })

  const closeAndSave = () => {
    closeHandler()
    if (loggedUser) {
      addNote({ title: noteTitleRef.current.value, bodyText: noteTextRef.current.textContent, userId: loggedUser.id })
      noteTitleRef.current.value = ''
      noteTextRef.current.textContent = ''
    }
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
