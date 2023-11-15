import './assets/style/note.css'
import NoteForm from './NoteForm'
import useNote from './hooks/useNote'

export default function Note ({ children, title, id, noteColor }) {
  const {
    textContent,
    attachments,
    saveNote,
    saveImage,
    deleteImage
  } = useNote({ children, title, id, noteColor })

  return (
    <NoteForm className='invisible-note' title={textContent.title} noteBody={textContent.text} attachments={attachments}>
      <NoteForm className='ampliable-note' noteColor={noteColor} title={textContent.title} noteBody={textContent.text} onSaveText={saveNote} onSaveImage={saveImage} attachments={attachments} deleteImage={deleteImage} />
    </NoteForm>
  )
}
