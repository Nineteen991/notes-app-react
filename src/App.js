import { useState } from 'react'

import AddNote from './components/AddNote'
import Notes from './components/Notes'
import './App.css'

export default function App() {
  const [notes, setNotes] = useState([])
  const [noteObj, setNoteObj] = useState({
      noteTitle: '',
      noteDetails: ''
  })
  const [editNote, setEditNote] = useState([false, {}])

  return (
    <div className='container'>
      <h1 className='title-h1'>Notes App React</h1>
      <AddNote 
        setNotes={setNotes} 
        notes={notes}
        noteObj={noteObj} 
        setNoteObj={setNoteObj}
        editNote={editNote}
        setEditNote={setEditNote}
      />
      <Notes 
        notes={notes} 
        setNotes={setNotes} 
        setNoteObj={setNoteObj}
        setEditNote={setEditNote}
      />
    </div>
  )
}