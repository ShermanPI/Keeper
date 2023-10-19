import { useState } from 'react'
import './assets/style/note.css'
import NoteForm from './NoteForm'

export default function Note ({ children, title }) {
  const [noteText, setNoteText] = useState(children)

  const saveNote = (e, { noteText }) => {
    console.log(e.target)
    e.stopPropagation()
    setNoteText(noteText)
  }

  return (
    <NoteForm className='invisible-note' title={title} noteBody={noteText}>
      <NoteForm className='ampliable-note' title={title} noteBody={noteText} onSave={saveNote} />
    </NoteForm>
  )
}
