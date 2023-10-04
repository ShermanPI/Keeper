import '../assets/styles/pages/home.css'
import Header from '../components/Header/Header'
import NotesSection from '../components/NotesSection/NotesSection'
import Note from '../components/Note/Note'
import React, { useState } from 'react'
import { AddIcon } from '../assets/images/Icons.jsx'
import SideMenu from '../components/SideMenu/SideMenu'
import notesResponse from '../mock/with-response.json'
import { PushPinIcon, PalleteIcon, ImageIcon, InventoryIcon, DeleteIcon } from '../components/Note/assets/images/Icons'

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
    setAddNoteHidden(!addNoteHidden)
  }

  return (
    <div className='home-container'>

      <div className={`new-note-container ${addNoteHidden ? 'hidden' : ''}`} onClick={toggleNewNote}>
        <div className='new-note' onClick={(e) => e.stopPropagation()}>
          <div className='file-note-icon'>
            <PushPinIcon />
          </div>
          <b>Hola</b>
          <p className='note-text'>jijija</p>
          <div className='new-note-buttons-container'>
            <div className='note-action-button'>
              <PalleteIcon />
            </div>
            <div className='note-action-button'>
              <ImageIcon />
            </div>
            <div className='note-action-button'>
              <InventoryIcon />
            </div>
            <div className='note-action-button'>
              <DeleteIcon />
            </div>
          </div>
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
            {notesResponse.map(el => {
              return <Note key={el.id} title={el.title} noteId={el.id}>{el.bodyText}</Note>
            })}
          </NotesSection>
          <NotesSection title='Others' columns={oneColumnGrid ? 'one-column' : ''}>
            <Note title='Hola'>Note 1</Note>
            <Note title='Hola'>s quodafsdf.klgjnd.fkjgnsldfglsdfbgkjshdbfgkjhsdfbkgsjdhbfkghsbdfkgbsdkfgbskdfhbgksdfhbgksdjfhbgksdhfbgksdjhfbgksdhfbkgshdfbkgjshdfkgjhb rem omnis esse non explicabo ratione fugiat debitis unde? Placeat pariatur animi facilis fugiat sed, nesciunt vitae accusamus tempora.</Note>
            <Note title='Hola'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quis quo </Note>
            <Note title='Hola'>Note 1</Note>
          </NotesSection>
        </section>
      </section>
    </div>
  )
}
