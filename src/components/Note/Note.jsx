import './assets/style/note.css'
import NoteForm from './NoteForm'

export default function Note ({ children, title }) {
  return (
    <NoteForm className='invisible-note' title={title} noteBody={children}>
      <NoteForm className='ampliable-note' title={title} noteBody={children} />
    </NoteForm>
  )
}
