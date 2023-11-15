import { PalleteIcon } from '../assets/images/Icons'
import { useToggle } from '../../../hooks/useToggle'

export function ChangeColorCard () {
  const { toggleState: isActive, toggle: toggleIsActive } = useToggle({ initialValue: false })

  return (
    <button className='note-action-button change-color-btn' onClick={toggleIsActive}>
      <div className={`card-colors-container ${!isActive && 'hidden-note-color'}`}>
        <ul className='note-colors'>
          <li className='note-item-color' />
          <li className='note-item-color' />
          <li className='note-item-color' />
          <li className='note-item-color' />
        </ul>
      </div>
      <PalleteIcon />
    </button>
  )
}
