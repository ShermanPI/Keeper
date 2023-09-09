import '../assets/styles/pages/home.css'
import Header from '../components/Header/Header'
import NotesSection from '../components/NotesSection/NotesSection'
import Note from '../components/Note/Note'

export default function Home () {
  return (
    <div className='home-container'>
      <Header />
      <section className='dashboard-container'>
        <NotesSection title='Pinned'>
          <Note title='Hola'>Note 1</Note>
          <Note title='Hola'>Note 1</Note>
          <Note title='Hola'>Note 1</Note>
          <Note title='Hola'>Note 1</Note>
          <Note title='Hola'>Note 1</Note>

        </NotesSection>
        <NotesSection title='Others' />
      </section>
    </div>
  )
}
