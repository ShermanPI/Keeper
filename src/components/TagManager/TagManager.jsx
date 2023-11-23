import { useRef, useState, useContext, useEffect, useMemo } from 'react'
import { AddIcon, MagnifyingGlasses } from '../Note/assets/images/Icons'
import './assets/style/TagManager.css'
import createNewNoteTag from '../../services/note/createNewNoteTag'
import { session } from '../../context/contextLogin'
import { tagContext } from '../../context/tagContext'
import { tagNote } from '../../services/note/tagNote'
import { getNoteTags } from '../../services/note/getNoteTags'

export default function TagManager ({ isVisible, noteId }) {
  const tagInputRef = useRef()
  const [query, setQuery] = useState('')
  const { loggedUser } = useContext(session)
  const { tags: generalTags, addTag } = useContext(tagContext)
  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    if (noteId) {
      (async () => {
        const newSelectedTags = await getNoteTags({ noteId })
        setSelectedTags(newSelectedTags)
      })()
    }
  }, [noteId])

  const handleCheckbox = ({ event, noteId, tagId }) => {
    event.target.checked = !event.target.checked
    tagNote({ noteId, tagId })
  }

  const generalTagsAndSelectedTags = useMemo(() => {
    return generalTags.map((el) => {
      console.log(selectedTags.indexOf((el.id)) !== -1, el.id)
      return (
        <li key={el.id}>
          <label>
            <input
              type='checkbox' name='checkbox' checked={(selectedTags.indexOf((el.id)) !== -1)} onChange={(event) => {
                handleCheckbox({ event, noteId, tagId: el.id })
              }}
            />
            {el.name}
          </label>
        </li>
      )
    })
  }, [selectedTags, generalTags])

  const handleInputChange = (e) => {
    if (e.target.value.length <= 50) {
      setQuery(e.target.value)
    }
  }

  const handleCreateNote = async () => {
    if (query.length > 0 && !generalTags.find(({ name }) => name === query)) {
      const newTag = await createNewNoteTag({ userId: loggedUser.id, name: query })
      addTag({ newTag })
      setQuery('')
    }
  }

  return (
    <div className={`card-tags-container ${!isVisible && 'hidden-note-tag'}`} onClick={(e) => e.stopPropagation()}>
      <h3>Tag Note</h3>
      <label className='search-tag-container' ref={tagInputRef}>
        <input type='text' className='search-label-input' placeholder='Enter label name' value={query} onChange={handleInputChange} />
        <MagnifyingGlasses />
      </label>

      <ul className='note-tag-list'>
        {generalTagsAndSelectedTags}
      </ul>
      <button className='add-label-btn' onClick={handleCreateNote}>
        <AddIcon />
        <p>Create "<b>{query}</b>"</p>
      </button>
    </div>
  )
}
