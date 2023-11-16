// import { useMemo } from 'react'
import { PalleteIcon } from '../assets/images/Icons'
import { useToggle } from '../../../hooks/useToggle'
import Color from './Color'
import { useMemo } from 'react'

export function ChangeColorCard ({ handleChangeColor, noteColor }) {
  const { toggleState: isActive, toggle: toggleIsActive } = useToggle({ initialValue: false })

  const hexColorPallete = [
    { hexColor: '#202124' },
    { hexColor: '#77172e' },
    { hexColor: '#692b17' },
    { hexColor: '#7c4a03' },
    { hexColor: '#264d3b' },
    { hexColor: '#0c625d' },
    { hexColor: '#256377' },
    { hexColor: '#284255' },
    { hexColor: '#00324b' },
    { hexColor: '#472e5b' },
    { hexColor: '#6c394f' },
    { hexColor: '#4b443a' },
    { hexColor: '#232427' }
  ]

  const handleColorClick = ({ noteColor }) => {
    console.log('JAHSBVDKJHAGSBVDK🚀🚀🚀🚀', noteColor)
    handleChangeColor({ noteColor })
  }

  const colorOptions = useMemo(() => {
    return hexColorPallete.map((el, i) => {
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
