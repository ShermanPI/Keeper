import { useEffect, useRef } from 'react'
import { CheckIcon, DeleteIcon, ImageIcon, InventoryIcon, PalleteIcon, PushPinIcon } from './assets/images/Icons'
import { usePlaceholder } from '../../hooks/usePlaceholder'
import { useToggle } from '../../hooks/useToggle'

export default function NoteForm ({ className, children, title, noteBody, onSaveText = function noop () {}, onSaveImage = function noop () {}, attachments = [] }) {
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
    if (className !== 'invisible-note' && !amplified) {
      toggleAmplified()
    }
  }

  const handleCloseAndSaveText = (e) => {
    e.stopPropagation()
    toggleAmplified()
    onSaveText({ text: noteTextRef.current.textContent, title: noteTitleRef.current.value })
  }

  const handleSaveImage = (e) => {
    onSaveImage({ file: e.target.files[0] })
  }

  const imageAttachments = []

  for (let i = 0; i < attachments.length; i += 3) {
    const imagesGroup = attachments.slice(i, (i + 3))
    const imageContainer = (
      <div className='note-images-container'>
        {imagesGroup.map(el => <img src={el.url} key={el.id} style={{ flexGrow: `calc(${el.width}/${el.height})` }} />)}
      </div>
    )
    imageAttachments.push(imageContainer)
    console.log(imageAttachments, 'hey')
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
          {/* <div className='note-images-container'>
            {attachments.map((el) => {
              return (<img src={el.url} key={el.id} style={{ flexGrow: `calc(${el.width}/${el.height})` }} />)
            })}
          </div> */}
          <div className='images-container'>
            {imageAttachments.reverse().map((el) => el)}
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
            <input type='file' name='' onChange={handleSaveImage} />
          </div>
          <div className='note-action-button'>
            <InventoryIcon />
          </div>
          <div className='note-action-button'>
            <DeleteIcon />
          </div>
          <button onClick={handleCloseAndSaveText} className='close-note-btn'>Close</button>
        </div>
        {children}
      </div>
      {amplified ? <div className='amplified-note-background' onClick={handleCloseAndSaveText} /> : ''}
    </>
  )
}
