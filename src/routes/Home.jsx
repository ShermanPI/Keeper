import '../assets/styles/pages/home.css'
import Header from '../components/Header/Header'
import NotesSection from '../components/NotesSection/NotesSection'
import Note from '../components/Note/Note'
import React, { useMemo } from 'react'
import { AddIcon } from '../assets/images/Icons.jsx'
import SideMenu from '../components/SideMenu/SideMenu'
import NewNote from '../components/NewNote/NewNote'
import { useNotes } from '../hooks/useNotes'
import { Loader } from '../assets/images/loader/Loader'
import { useToggle } from '../hooks/useToggle'

export default function Home () {
  const { notes, addNewNote } = useNotes()
  const { toggleState: addNoteHidden, toggle: toggleAddNoteHidden } = useToggle({ initialValue: true })
  const { toggleState: menuOpen, toggle: toggleMenuOpen } = useToggle({ initialValue: false })
  const { toggleState: oneColumnGrid, toggle: toggleOneColumnGrid } = useToggle({ initialValue: false })

  const noteList = useMemo(() => notes.map((el) => {
    return (<Note key={el.id} title={el.title} id={el.id}>{el.bodyText}</Note>)
  }), [notes])

  return (
    <div className='home-container'>
      <Loader />
      <div className={`new-note-container ${addNoteHidden ? 'hidden' : ''}`} onClick={toggleAddNoteHidden}>
        <NewNote closeHandler={toggleAddNoteHidden} addNote={addNewNote} />
      </div>

      <Header menuOpenHandler={toggleMenuOpen} gridHandler={toggleOneColumnGrid} oneColumnGrid={oneColumnGrid} />
      <section className='dashboard-container'>
        <SideMenu menuOpen={menuOpen} menuOpenHandler={toggleMenuOpen} />

        <section className={`all-notes-container ${oneColumnGrid ? 'one-column-width' : ''}`}>
          <button className='add-note-btn' onClick={toggleAddNoteHidden}>
            <div className='add-icon'>
              <AddIcon />
            </div>
            Create Note
          </button>
          <NotesSection title='Pinned' columns={oneColumnGrid ? 'one-column' : ''}>
            {noteList}
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
