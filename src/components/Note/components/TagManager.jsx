import { MagnifyingGlasses, TagIcon } from '../assets/images/Icons'
import { useToggle } from '../../../hooks/useToggle'

export default function TagManager () {
  const { toggleState: isActive, toggle: toggleIsActive } = useToggle({ initialValue: false })

  return (
    <>
      <div className={`card-tags-container ${!isActive && 'hidden-note-tag'}`} onClick={(e) => e.stopPropagation()}>
        <h3>Label Note</h3>
        <label className='search-tag-container'>
          <input type='text' className='search-label-input' placeholder='Search for a label' />
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

        <button>
          Add Label "New"
        </button>
      </div>
      <button className='note-action-button tags-btn' onClick={toggleIsActive}>
        <TagIcon />
      </button>
    </>
  )
}
