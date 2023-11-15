import React from 'react'
import { CheckIcon, DeleteIcon, ImageIcon, InventoryIcon, PaperBin, PushPinIcon } from './assets/images/Icons'
import { useNote } from './hooks/useNote'
import { ChangeColorCard } from './components/ChangeColorCard'

export default function NoteForm ({ className, children, title, noteBody, onSaveText = function noop () {}, onSaveImage = function noop () {}, attachments = [], deleteImage = function noop () {} }) {
  const {
    isFirstRenderRef,
    noteTextRef,
    noteTitleRef,
    amplified,
    isUserTyping,
    handleNotePlaceholder,
    handleNoteClick,
    handleCloseAndSaveText,
    handleSaveImage,
    handleDeleteImage
  } = useNote({ className, onSaveText, onSaveImage, deleteImage })

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
          <div className='images-container'>
            {attachments.map((el, i) => {
              const image = (
                <React.Fragment key={el.id}>
                  <div key={el.id} className='note-image' style={{ flexGrow: (attachments.length % 3 === 1) && i === attachments.length - 1 ? '1' : `calc(${el.width}/${el.height})` }}>
                    <img src={el.url} alt={el.title} />
                    <button className='delete-img-btn' onClick={() => handleDeleteImage({ imageName: el.title, attachmentId: el.id })}>
                      <PaperBin />
                    </button>
                  </div>
                  {((i + 1) % 3 === 0) && <div className='break' />}
                </React.Fragment>
              )

              return image
            })}
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
          <ChangeColorCard />
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
