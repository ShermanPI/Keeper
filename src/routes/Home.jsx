import '../assets/styles/pages/home.css'
import Header from '../components/Header/Header'
import NotesSection from '../components/NotesSection/NotesSection'
import Note from '../components/Note/Note'
import { useState } from 'react'
import SideMenu from '../components/SideMenu/SideMenu'

export default function Home () {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='home-container'>
      <Header menuOpenHandler={menuOpenHandler} />
      <section className='dashboard-container'>
        <SideMenu menuOpen={menuOpen} menuOpenHandler={menuOpenHandler} />

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
