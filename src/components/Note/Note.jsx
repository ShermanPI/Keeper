import { useRef, useState } from 'react'
import './assets/style/note.css'
import NoteForm from './NoteForm'
import updateNote from '../../services/updateNote'

export default function Note ({ children, title, id }) {
  const [textContent, setNoteText] = useState({ title, text: children })
  const noteContentRef = useRef(textContent)

  const saveNote = async ({ title, text }) => {
    if (!(JSON.stringify(noteContentRef.current) === JSON.stringify({ title, text }))) {
      const editedNote = await updateNote({ id, title, text })
      console.log(editedNote)
      setNoteText(editedNote[0])
      noteContentRef.current = { title, text }
    }
  }

  return (
    <NoteForm className='invisible-note' title={textContent.title} noteBody={textContent.text}>
      <NoteForm className='ampliable-note' title={textContent.title} noteBody={textContent.text} onSave={saveNote} />
    </NoteForm>
  )
}
