import '../assets/styles/pages/home.css'
import Header from '../components/Header/Header'
import NotesSection from '../components/NotesSection/NotesSection'
import Note from '../components/Note/Note'
import { useState } from 'react'
import { AddIcon } from '../assets/images/Icons.jsx'
import SideMenu from '../components/SideMenu/SideMenu'

export default function Home () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [oneColumnGrid, setOneColumnGrid] = useState(false)
  const [addNoteHidden, setAddNoteHidden] = useState(true)

  const gridHandler = () => {
    setOneColumnGrid(!oneColumnGrid)
  }

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleNewNote = () => {
    console.log('se le ha dado toggle a la noata')
    setAddNoteHidden(!addNoteHidden)
  }

  return (
    <div className='home-container'>

      <div className={`new-note-container ${addNoteHidden ? 'hidden' : ''}`} onClick={toggleNewNote}>
        <div className='new-note'>
          <h1>Title</h1>
          <p>This is the notes body</p>
        </div>
      </div>

      <Header menuOpenHandler={menuOpenHandler} gridHandler={gridHandler} oneColumnGrid={oneColumnGrid} />
      <section className='dashboard-container'>
        <SideMenu menuOpen={menuOpen} menuOpenHandler={menuOpenHandler} />

        <section className={`all-notes-container ${oneColumnGrid ? 'one-column-width' : ''}`}>
          <button className='add-note-btn' onClick={toggleNewNote}>
            <div className='add-icon'>
              <AddIcon />
            </div>
            Create Note
          </button>
          <NotesSection title='Pinned' columns={oneColumnGrid ? 'one-column' : ''}>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo rem omnis esse non explicabo ratione fugiat debitis unde? Placeat pariatur animi facilis fugiat sed, nesciunt vitae accusamus tempora.</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
          </NotesSection>
          <NotesSection title='Others' columns={oneColumnGrid ? 'one-column' : ''}>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>s quo rem omnis esse non explicabo ratione fugiat debitis unde? Placeat pariatur animi facilis fugiat sed, nesciunt vitae accusamus tempora.</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>

          </NotesSection>
        </section>
      </section>
    </div>
  )
}
