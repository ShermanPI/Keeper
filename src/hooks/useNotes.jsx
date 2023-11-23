import { useState, useEffect, useContext, useMemo } from 'react'
import { getNotes } from '../services/note/getNotes'
import createNewNote from '../services/note/createNewNote'
import { session } from '../context/contextLogin'
import Note from '../components/Note/Note'

export function useNotes () {
  const [notes, setNotes] = useState([])
  const { loggedUser } = useContext(session)

  useEffect(() => {
    if (loggedUser) {
      getNotes({ userId: loggedUser.id })
        .then(res => {
          setNotes(res)
        })
    }
  }, [loggedUser])

  const addNewNote = async ({ title, bodyText, userId }) => {
    try {
      const newNote = await createNewNote({ title, text: bodyText, userId })
      const newNotes = [...notes]
      newNotes.push(newNote)
      setNotes(newNotes)
    } catch (err) {
      console.error(err)
    }
  }

  const noteList = useMemo(() => notes.map((el) => {
    return (<Note key={el.id} title={el.title} id={el.id} noteColor={el.noteColor}>{el.bodyText}</Note>)
  }), [notes])

  return (
    {
      noteList,
      addNewNote
    }
  )
}
