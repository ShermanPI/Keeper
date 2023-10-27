import { useState, useEffect } from 'react'
import { getNotes } from '../services/getNotes'
import sendNewNote from '../services/createNewNote'

export function useNotes () {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
      .then(res => {
        setNotes(res)
      })
  }, [])

  const addNewNote = async ({ title, bodyText }) => {
    try {
      const newNote = await sendNewNote({ title, text: bodyText })
      const newNotes = [...notes]
      newNotes.push(newNote)
      setNotes(newNotes)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    {
      notes,
      addNewNote
    }
  )
}
