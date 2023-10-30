import { useState, useEffect, useContext } from 'react'
import { getNotes } from '../services/getNotes'
import createNewNote from '../services/createNewNote'
import { session } from '../context/contextLogin'

export function useNotes () {
  const [notes, setNotes] = useState([])
  const { loggedUser } = useContext(session)

  useEffect(() => {
    if (loggedUser) {
      getNotes({ userId: loggedUser.id })
        .then(res => {
          console.log(res, 'cambio logged user? 👽👽')
          setNotes(res)
        })
    }
  }, [loggedUser])

  const addNewNote = async ({ title, bodyText, userId }) => {
    try {
      const newNote = await createNewNote({ title, text: bodyText, userId })
      const newNotes = [...notes]
      newNotes.push(newNote)
      console.log(newNotes)
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
