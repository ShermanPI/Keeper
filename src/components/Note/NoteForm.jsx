import { useEffect, useRef } from 'react'
import { CheckIcon, DeleteIcon, ImageIcon, InventoryIcon, PalleteIcon, PushPinIcon } from './assets/images/Icons'
import { usePlaceholder } from '../../hooks/usePlaceholder'
import { useToggle } from '../../hooks/useToggle'

export default function NoteForm ({ className, children, title, noteBody, onSave = function noop () {} }) {
  const { toggleState: amplified, toggle: toggleAmplified } = useToggle({ initialValue: false })
  const noteTextRef = useRef()
  const noteTitleRef = useRef()
  const { isUserTyping, handleNotePlaceholder } = usePlaceholder({ noteTextRef })
  const isFirstRenderRef = useRef(true)

  useEffect(() => {
    isFirstRenderRef.current = false
  }, [])

  const handleNoteClick = (e) => {
    e.stopPropagation()
    if (className !== 'invisible-note') {
      toggleAmplified()
    }
  }

  const handleCloseAndSave = (e) => {
    e.stopPropagation()
    toggleAmplified()
    onSave({ text: noteTextRef.current.textContent, title: noteTitleRef.current.value })
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

        <div className='note-body-contaier'>
          <div className='note-images-container'>
            <div className='note-image'>
              <img src='/bohemian.jpg' alt='' />
            </div>
          </div>

          <input type='text' ref={noteTitleRef} name='note-title' defaultValue={title} className='note-title' placeholder='Title' />
          <div className='note-text' name='note-text'>
            {!isFirstRenderRef.current && <div className='note-text-placeholder'>{noteTextRef.current.textContent || isUserTyping ? '' : 'Empty Note...'}</div>}
            <p ref={noteTextRef} contentEditable='true' role='textarea' suppressContentEditableWarning onInput={handleNotePlaceholder}>
              {noteBody}
            </p>
          </div>
        </div>

        <div className='note-buttons-container'>
          <div className='note-action-button'>
            <PalleteIcon />
          </div>
          <div className='note-action-button'>
            <ImageIcon />
            <input type='file' name='' />
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
