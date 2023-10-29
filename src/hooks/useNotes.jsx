import { useState, useEffect, useContext } from 'react'
import { getNotes } from '../services/getNotes'
import sendNewNote from '../services/createNewNote'
import { session } from '../context/contextLogin'

export function useNotes () {
  const [notes, setNotes] = useState([])
  const { loggedUser } = useContext(session)

  useEffect(() => {
    loggedUser && getUserNotes({ userId: loggedUser.id })
  }, [loggedUser])

  const addNewNote = async ({ title, bodyText, userId }) => {
    try {
      const newNote = await sendNewNote({ title, text: bodyText, user_id: userId })
      const newNotes = [...notes]
      newNotes.push(newNote)
      setNotes(newNotes)
    } catch (err) {
      console.error(err)
    }
  }

  const getUserNotes = async ({ userId }) => {
    getNotes({ userId })
      .then(res => {
        setNotes(res)
      })
  }

  return (
    {
      notes,
      addNewNote
    }
  )
}
