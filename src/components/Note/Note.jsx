import { useEffect, useRef, useState } from 'react'
import './assets/style/note.css'
import NoteForm from './NoteForm'
import updateNote from '../../services/updateNote'
import uploadNoteImage from '../../services/uploadNoteImage'
import { getNoteAttachments } from '../../services/getNoteAttachments'

export default function Note ({ children, title, id }) {
  const [textContent, setNoteText] = useState({ title, text: children })
  const noteContentRef = useRef(textContent)
  const [attachments, setAttachments] = useState([])

  useEffect(() => {
    (async () => {
      if (id) {
        const attachments = await getNoteAttachments({ noteId: id })
        setAttachments(attachments)
      }
    })()
  }, [])

  const saveNote = async ({ title, text }) => {
    if (!(JSON.stringify(noteContentRef.current) === JSON.stringify({ title, text }))) {
      const editedNote = await updateNote({ id, title, text })
      setNoteText(editedNote[0])
      noteContentRef.current = { title, text }
    }
  }

  const saveImage = async ({ file }) => {
    const { attachmentData: data } = await uploadNoteImage({ file, id })
    const newAttachments = [...attachments]
    newAttachments.push(data[0])
    setAttachments(newAttachments)
  }

  return (
    <NoteForm className='invisible-note' title={textContent.title} noteBody={textContent.text} attachments={attachments}>
      <NoteForm className='ampliable-note' title={textContent.title} noteBody={textContent.text} onSaveText={saveNote} onSaveImage={saveImage} attachments={attachments} />
    </NoteForm>
  )
}
