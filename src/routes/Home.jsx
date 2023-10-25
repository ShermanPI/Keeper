import '../assets/styles/pages/home.css'
import Header from '../components/Header/Header'
import NotesSection from '../components/NotesSection/NotesSection'
import Note from '../components/Note/Note'
import React, { useState } from 'react'
import { AddIcon } from '../assets/images/Icons.jsx'
import SideMenu from '../components/SideMenu/SideMenu'
// import { notesResponse } from '../mock/with-response'

import NewNote from '../components/NewNote/NewNote'
import { useNotes } from '../hooks/useNotes'

export default function Home () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [oneColumnGrid, setOneColumnGrid] = useState(false)
  const [addNoteHidden, setAddNoteHidden] = useState(true)
  const { notes, addNewNote } = useNotes()

  const gridHandler = () => {
    setOneColumnGrid(!oneColumnGrid)
  }

  const menuOpenHandler = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleNewNote = () => {
    setAddNoteHidden(!addNoteHidden)
  }

  return (
    <div className='home-container'>

      <div className={`new-note-container ${addNoteHidden ? 'hidden' : ''}`} onClick={toggleNewNote}>
        <NewNote closeHandler={toggleNewNote} addNote={addNewNote} />
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
            {notes.map(function hola (el) {
              return (<Note key={el.id} title={el.title} id={el.id}>{el.bodyText}</Note>)
            })}
          </NotesSection>

          <NotesSection title='Others' columns={oneColumnGrid ? 'one-column' : ''}>
            <Note key='jijija3294' title='Hola'>Note 1</Note>
            <Note key='jijija1' title='Hola'>Note 1</Note>
            <Note key='jijija2' title='Hola'>s quodafsdf.klgjnd.fkjgnsldfglsdfbgkjshdbfgkjhsdfbkgsjdhbfkghsbdfkgbsdkfgbskdfhbgksdfhbgksdjfhbgksdhfbgksdjhfbgksdhfbkgshdfbkgjshdfkgjhb rem omnis esse non explicabo ratione fugiat debitis unde? Placeat pariatur animi facilis fugiat sed, nesciunt vitae accusamus tempora.</Note>
            <Note key='jijija4' title='Hola'>Note 1</Note>
            <Note key='jijija3' title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>

          </NotesSection>
        </section>
      </section>

    </div>
  )
}
