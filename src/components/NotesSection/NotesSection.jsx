import './assets/style/noteSection.css'
import { memo } from 'react'

function NotesSection ({ children, title, columns }) {
  console.log('render de notes sections 😁')

  return (
    <section className='note-section'>
      <h3 className='section-title'>
        {title.toUpperCase()}
      </h3>
      <section className={`notes-container ${columns}`}>
        {children}
      </section>
    </section>
  )
}

export default memo(NotesSection)
