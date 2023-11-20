import { useRef, useState } from 'react'
import { AddIcon, MagnifyingGlasses } from '../Note/assets/images/Icons'
import './assets/style/TagManager.css'

export default function TagManager ({ isVisible }) {
  const tagInputRef = useRef()
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    if (e.target.value.length <= 50) {
      setQuery(e.target.value)
    }
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
      <button className='add-label-btn' onClick={() => console.log('ehy')}>
        <AddIcon />
        <p>Create "<b>{query}</b>"</p>
      </button>
    </div>
  )
}
