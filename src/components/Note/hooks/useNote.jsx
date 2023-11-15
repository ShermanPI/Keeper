import { useRef, useEffect } from 'react'
import { useToggle } from '../../../hooks/useToggle'
import { usePlaceholder } from '../../../hooks/usePlaceholder'

export function useNote () {
  const isFirstRenderRef = useRef(true)
  const noteTextRef = useRef()
  const noteTitleRef = useRef()
  const { toggleState: amplified, toggle: toggleAmplified } = useToggle({ initialValue: false })
  const { isUserTyping, handleNotePlaceholder } = usePlaceholder({ noteTextRef })

  useEffect(() => {
    isFirstRenderRef.current = false
  }, [])

  return {
    isFirstRenderRef,
    noteTextRef,
    noteTitleRef,
    amplified,
    toggleAmplified,
    isUserTyping,
    handleNotePlaceholder
  }
}
