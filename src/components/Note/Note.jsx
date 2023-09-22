import { CheckIcon, DeleteIcon, ImageIcon, InventoryIcon, PalleteIcon } from './assets/images/Icons'
import './assets/style/note.css'

export default function Note ({ children, title }) {
  return (
    <div className='note'>
      <div className='select-note-icon'>
        <CheckIcon />
      </div>
      <b>{title}</b>
      <p>{children}</p>
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
  )
}
