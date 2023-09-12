import './assets/style/noteSection.css'

export default function NotesSection ({ children, title }) {
  return (
    <section className='note-section'>
      <h3 className='section-title'>
        {title}
      </h3>
      <section className='notes-container'>
        {children}
      </section>
    </section>
  )
}
