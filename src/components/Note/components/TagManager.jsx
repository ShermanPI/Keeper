import { TagIcon } from '../assets/images/Icons'
import { useToggle } from '../../../hooks/useToggle'

export default function TagManager () {
  const { toggleState: isActive, toggle: toggleIsActive } = useToggle({ initialValue: false })

  return (
    <button className='note-action-button tags-btn'>
      <div className='card-tags-container' onClick={toggleIsActive}>
        <ul className='note-tag-list'>
          <li className='tag-list-item'> option 1 </li>
          <li> option 2 </li>
        </ul>
      </div>
      <TagIcon />
    </button>
  )
}
