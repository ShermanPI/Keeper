import { useState } from 'react'

export function usePlaceholder ({ noteTextRef }) {
  const [isUserTyping, setIsUserTyping] = useState(false)
  const handleNotePlaceholder = () => {
    // even this executes a lot react doesnt make the render of setIsUserTyping cause the new state is the same as the last state
    if (!noteTextRef.current.textContent) {
      setIsUserTyping(false)
    } else {
      setIsUserTyping(true)
    }
  }

  return {
    isUserTyping,
    handleNotePlaceholder
  }
}
