import { useRef, useEffect, useState } from 'react'
import { useToggle } from '../../../hooks/useToggle'
import { usePlaceholder } from '../../../hooks/usePlaceholder'
import { updateNoteColor } from '../../../services/note/updateNoteColor'

export function useNoteForm ({ className, onSaveText, onSaveImage, deleteImage, noteColorInitialValue, id }) {
  const isFirstRenderRef = useRef(true)
  const noteTextRef = useRef()
  const noteTitleRef = useRef()
  const { toggleState: amplified, toggle: toggleAmplified } = useToggle({ initialValue: false })
  const { isUserTyping, handleNotePlaceholder } = usePlaceholder({ noteTextRef })
  const [colorState, setColorState] = useState(noteColorInitialValue)

  useEffect(() => {
    isFirstRenderRef.current = false
  }, [])

  const handleNoteClick = (e) => {
    e.stopPropagation()
    if (className !== 'invisible-note' && !amplified) {
      toggleAmplified()
    }
  }

  const handleCloseAndSaveText = (e) => {
    e.stopPropagation()
    toggleAmplified()
    onSaveText({ text: noteTextRef.current.textContent, title: noteTitleRef.current.value })
  }

  const handleSaveImage = (e) => {
    onSaveImage({ file: e.target.files[0] })
  }

  const handleDeleteImage = ({ imageName, attachmentId }) => {
    deleteImage({ imageName, attachmentId })
  }

  const handleChangeColor = ({ noteColor }) => {
    setColorState(noteColor)
    updateNoteColor({ id, hexColorString: noteColor })
  }

  return {
    isFirstRenderRef,
    noteTextRef,
    colorState,
    noteTitleRef,
    amplified,
    isUserTyping,
    handleNotePlaceholder,
    handleNoteClick,
    handleCloseAndSaveText,
    handleSaveImage,
    handleDeleteImage,
    handleChangeColor
  }
}
