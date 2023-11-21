import { useRef, useState, useContext } from 'react'
import { AddIcon, MagnifyingGlasses } from '../Note/assets/images/Icons'
import './assets/style/TagManager.css'
import createNewNoteTag from '../../services/note/createNewNoteTag'
import { session } from '../../context/contextLogin'
import { tagContext } from '../../context/tagContext'

export default function TagManager ({ isVisible }) {
  const tagInputRef = useRef()
  const [query, setQuery] = useState('')
  const { loggedUser } = useContext(session)
  const { tags, addTag } = useContext(tagContext)

  const handleChange = (e) => {
    if (e.target.value.length <= 50) {
      setQuery(e.target.value)
    }
  }

  const handleCreateNote = async () => {
    if (query.length > 0 && !tags.find(({ name }) => name === query)) {
      const newTag = await createNewNoteTag({ userId: loggedUser.id, name: query })
      addTag({ newTag })
      setQuery('')
    }
  }

  return (
    <div className={`card-tags-container ${!isVisible && 'hidden-note-tag'}`} onClick={(e) => e.stopPropagation()}>
      <h3>Tag Note</h3>
      <label className='search-tag-container' ref={tagInputRef}>
        <input type='text' className='search-label-input' placeholder='Enter label name' value={query} onChange={handleChange} />
        <MagnifyingGlasses />
      </label>

      <ul className='note-tag-list'>
        {tags.map((el) => {
          return (
            <li key={el.id}>
              <label><input type='checkbox' name='checkbox' value='value' defaultChecked />{el.name}</label>
            </li>
          )
        })}
      </ul>
      <button className='add-label-btn' onClick={handleCreateNote}>
        <AddIcon />
        <p>Create "<b>{query}</b>"</p>
      </button>
    </div>
  )
}
