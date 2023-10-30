import { useState } from 'react'

export function useToggle ({ initialValue }) {
  const [toggleState, setToggleState] = useState(initialValue)

  const toggle = () => {
    setToggleState(!toggleState)
  }

  return ({
    toggleState,
    toggle
  })
}
