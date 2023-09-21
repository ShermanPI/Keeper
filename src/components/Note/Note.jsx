import { DeleteIcon, ImageIcon, InventoryIcon, PalleteIcon } from './assets/images/Icons'
import './assets/style/note.css'

export default function Note ({ children, title }) {
  return (
    <div className='note'>
      <b>{title}</b>
      <p>{children}</p>
      <div className='note-buttons-container'>
        <PalleteIcon />
        <ImageIcon />
        <InventoryIcon />
        <DeleteIcon />
      </div>
    </div>
  )
}
