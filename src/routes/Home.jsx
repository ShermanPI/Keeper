import '../assets/styles/pages/home.css'
import Header from '../components/Header/Header'
import NotesSection from '../components/NotesSection/NotesSection'
import Note from '../components/Note/Note'
import MenuCategory from '../components/Category/MenuCategory'
import { Inventory, Ligthbulb, PaperBin, Tags } from '../components/Category/assets/images/Icons'
import { useState } from 'react'

export default function Home () {
  const [selectedLabel, setSelectedLabel] = useState('category-1')
  const [menuOpen, setMenuOpen] = useState(false)

  const handlerMenuOpener = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='home-container'>
      <Header handlerMenuOpen={handlerMenuOpener} />
      <section className='dashboard-container'>

        <section className={`categories-menu ${menuOpen ? '' : 'hidden'}`} onClick={handlerMenuOpener}>
          <section className='categories-section' onClick={(e) => e.stopPropagation()}>

            <div className='logo-text'>
              <div className='logotext-image-container'>
                <img src='src/assets/images/logo.png' alt='Keeper App Logo' />
              </div>
              <h1>Keeper</h1>
            </div>
            <ul className='categories-list'>
              <li><MenuCategory id='category-1' labelHandler={setSelectedLabel} selectedLabel={selectedLabel} icon={<Ligthbulb />}> Notes </MenuCategory></li>
              <li><MenuCategory id='category-2' labelHandler={setSelectedLabel} selectedLabel={selectedLabel} icon={<Tags />}> Edit Labels </MenuCategory></li>
              <li><MenuCategory id='category-3' labelHandler={setSelectedLabel} selectedLabel={selectedLabel} icon={<Inventory />}> File </MenuCategory></li>
              <li><MenuCategory id='category-4' labelHandler={setSelectedLabel} selectedLabel={selectedLabel} icon={<PaperBin />}> Paper Bin </MenuCategory></li>
            </ul>
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
