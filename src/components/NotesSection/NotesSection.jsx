import './assets/style/noteSection.css'

export default function NotesSection ({ children, title, columns }) {
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
