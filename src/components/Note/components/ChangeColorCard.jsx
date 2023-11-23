// import { useMemo } from 'react'
import { PalleteIcon } from '../assets/images/Icons'
import { useToggle } from '../../../hooks/useToggle'
import Color from './Color'
import { useMemo } from 'react'
import { HEX_COLOR_PALLETE } from '../../../utilities/constants'

export function ChangeColorCard ({ handleChangeColor, noteColor }) {
  const { toggleState: isActive, toggle: toggleIsActive } = useToggle({ initialValue: false })

  const handleColorClick = ({ noteColor }) => {
    handleChangeColor({ noteColor })
  }

  const colorOptions = useMemo(() => {
    return HEX_COLOR_PALLETE.map((el, i) => {
      return <Color key={`color-${i}`} isSelected={el.hexColor === noteColor} backgroundColor={el.hexColor} borderColor={el.hexColor} onClick={() => handleColorClick({ noteColor: el.hexColor })} />
    })
  }, [noteColor])

  return (
    <button className='note-action-button change-color-btn' onClick={toggleIsActive}>
      <div className={`card-colors-container ${!isActive && 'hidden-note-color'}`}>
        <ul className='note-colors'>
          {colorOptions}
        </ul>
      </div>
      <PalleteIcon />
    </button>
  )
}
