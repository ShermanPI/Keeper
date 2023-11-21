import { useRef, useState, useContext } from 'react'
import { AddIcon, MagnifyingGlasses } from '../Note/assets/images/Icons'
import './assets/style/TagManager.css'
import createNewNoteTag from '../../services/createNewNoteTag'
import { session } from '../../context/contextLogin'

export default function TagManager ({ isVisible, noteId }) {
  const tagInputRef = useRef()
  const [query, setQuery] = useState('')
  const { loggedUser } = useContext(session)

  const handleChange = (e) => {
    if (e.target.value.length <= 50) {
      setQuery(e.target.value)
    }
  }

  const handleCreateNote = async () => {
    createNewNoteTag({ userId: loggedUser.id, name: query })
  }

  return (
    <div className={`card-tags-container ${!isVisible && 'hidden-note-tag'}`} onClick={(e) => e.stopPropagation()}>
      <h3>Tag Note</h3>
      <label className='search-tag-container' ref={tagInputRef}>
        <input type='text' className='search-label-input' placeholder='Search for a label' value={query} onChange={handleChange} />
        <MagnifyingGlasses />
      </label>

      <ul className='note-tag-list'>
        <li>
          <label><input type='checkbox' name='checkbox' value='value' />oscion</label>
        </li>
        <li>
          <label><input type='checkbox' name='checkbox' value='value' />Opcion</label>
        </li>
      </ul>
      <button className='add-label-btn' onClick={handleCreateNote}>
        <AddIcon />
        <p>Create "<b>{query}</b>"</p>
      </button>
    </div>
  )
}
