import { useRef, useState } from 'react'
import './assets/style/note.css'
import NoteForm from './NoteForm'
import updateNote from '../../services/updateNote'
import uploadNoteImage from '../../services/uploadNoteImage'

export default function Note ({ children, title, id }) {
  const [textContent, setNoteText] = useState({ title, text: children })
  const noteContentRef = useRef(textContent)

  const saveNote = async ({ title, text }) => {
    if (!(JSON.stringify(noteContentRef.current) === JSON.stringify({ title, text }))) {
      const editedNote = await updateNote({ id, title, text })
      setNoteText(editedNote[0])
      noteContentRef.current = { title, text }
    }
  }

  const saveImage = async ({ file }) => {
    uploadNoteImage({ file })
  }

  return (
    <NoteForm className='invisible-note' title={textContent.title} noteBody={textContent.text}>
      <NoteForm className='ampliable-note' title={textContent.title} noteBody={textContent.text} onSaveText={saveNote} onSaveImage={saveImage} />
    </NoteForm>
  )
}
