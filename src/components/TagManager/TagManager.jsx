import { AddIcon, MagnifyingGlasses } from '../Note/assets/images/Icons'
// import { useToggle } from '../../../hooks/useToggle'
import './assets/style/TagManager.css'

export default function TagManager () {
  // const { toggleState: isActive, toggle: toggleIsActive } = useToggle({ initialValue: false })

  return (
    <div className='card-tags-container' onClick={(e) => e.stopPropagation()}>
      <h3>Tag Note</h3>
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
      <button className='add-label-btn'>
        <AddIcon />
        Create "OPCION"
      </button>
    </div>
  )
}
