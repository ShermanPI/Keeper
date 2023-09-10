import './assets/style/noteSection.css'

export default function NotesSection ({ children, title }) {
  return (
    <section className='note-section'>
      <h4 className='section-title'>
        {title}
      </h4>
      <section className='notes-container'>
        {children}
      </section>
    </section>
  )
}
