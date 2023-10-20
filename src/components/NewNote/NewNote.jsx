import { PalleteIcon, ImageIcon, InventoryIcon, DeleteIcon } from '../Note/assets/images/Icons'

export default function NewNote () {
  return (
    <div className='new-note' onClick={(e) => e.stopPropagation()}>
      <input type='text' name='note-title' className='note-title' placeholder='Title' />
      <div className='note-text' name='note-text' placeholder='Note'>
        <p contentEditable='true' role='textarea' suppressContentEditableWarning />
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
        <button className='close-note-btn'>Close</button>
      </div>
    </div>
  )
}
