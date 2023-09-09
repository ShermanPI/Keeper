import '../assets/styles/pages/home.css'
import Header from '../components/Header/Header'
import NotesSection from '../components/NotesSection/NotesSection'
import Note from '../components/Note/Note'
import MenuCategory from '../components/Category/MenuCategory'

export default function Home () {
  return (
    <div className='home-container'>
      <Header />
      <section className='dashboard-container'>

        <section className='categories-menu'>
          <section className='categories-section'>

            <div className='logo-text'>
              <div className='logotext-image-container'>
                <img src='src/assets/images/logo.png' alt='' />
              </div>
              <h1>Keeper</h1>
            </div>

            <MenuCategory>
              Category One
            </MenuCategory>

          </section>
        </section>

        <section className='all-notes-container'>
          <NotesSection title='Pinned'>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo rem omnis esse non explicabo ratione fugiat debitis unde? Placeat pariatur animi facilis fugiat sed, nesciunt vitae accusamus tempora.</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
          </NotesSection>
          <NotesSection title='Others'>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>s quo rem omnis esse non explicabo ratione fugiat debitis unde? Placeat pariatur animi facilis fugiat sed, nesciunt vitae accusamus tempora.</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
          </NotesSection>
        </section>
      </section>
    </div>
  )
}
