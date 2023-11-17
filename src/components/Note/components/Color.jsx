import { ResetColor, CheckIcon } from '../assets/images/Icons'

export default function Color ({ backgroundColor = '#202124', isSelected, onClick }) {
  const isDefaultColor = backgroundColor === '#202124'

  return (
    <li className='note-item-color' style={{ backgroundColor, borderColor: ((isSelected && '#a142f4') || (isDefaultColor && '#5f6368')) }} onClick={onClick}>
      {isSelected &&
        <div className='color-selected-check'>
          <CheckIcon />
        </div>}
      {isDefaultColor && <ResetColor />}
    </li>
  )
}
