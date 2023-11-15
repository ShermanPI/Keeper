import { useRef, useEffect } from 'react'
import { useToggle } from '../../../hooks/useToggle'
import { usePlaceholder } from '../../../hooks/usePlaceholder'

export function useNoteForm ({ className, onSaveText, onSaveImage, deleteImage }) {
  const isFirstRenderRef = useRef(true)
  const noteTextRef = useRef()
  const noteTitleRef = useRef()
  const { toggleState: amplified, toggle: toggleAmplified } = useToggle({ initialValue: false })
  const { isUserTyping, handleNotePlaceholder } = usePlaceholder({ noteTextRef })

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

  return {
    isFirstRenderRef,
    noteTextRef,
    noteTitleRef,
    amplified,
    toggleAmplified,
    isUserTyping,
    handleNotePlaceholder,
    handleNoteClick,
    handleCloseAndSaveText,
    handleSaveImage,
    handleDeleteImage
  }
}
