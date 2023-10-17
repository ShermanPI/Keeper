import { useState } from 'react'
import { CheckIcon, DeleteIcon, ImageIcon, InventoryIcon, PalleteIcon, PushPinIcon } from './assets/images/Icons'

export default function NoteForm ({ className, children, title, noteBody }) {
  const [amplified, setAmplified] = useState(false)
  const [textareaHeight, setTextareaHeight] = useState('auto')
  console.log('render')

  const handleNoteClick = (e) => {
    e.stopPropagation()
    setAmplified(true)
  }

  const handleBackgroundClick = (e) => {
    e.stopPropagation()
    setAmplified(false)
  }

  const changeTextAreaHeight = (e) => {
    const newHeight = `${e.target.scrollHeight}px`
    if (newHeight !== textareaHeight) {
      setTextareaHeight(`${newHeight}`)
      console.log(newHeight, textareaHeight)
    }
  }

  return (
    <>
      <form className={`note ${amplified ? 'amplified-note' : ''} ${className}`} onClick={handleNoteClick}>
        <div className='note-top-icons'>
          <div className='select-note-icon'>
            <CheckIcon />
          </div>
          <div className='file-note-icon'>
            <PushPinIcon />
          </div>
        </div>

        <input type='text' name='' defaultValue={title} className='note-title' placeholder='Title' />
        <textarea className='note-text' style={{ height: textareaHeight }} defaultValue={noteBody} placeholder='Note' onKeyDown={changeTextAreaHeight} />

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
        {children}
      </form>
      <div className={`note-container ${amplified ? 'amplified-note-background' : ''}`} onClick={handleBackgroundClick} />
    </>
  )
}
