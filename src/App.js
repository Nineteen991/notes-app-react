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

  return (
    <div className='container'>
      <h1 className='title-h1'>Notes App React</h1>
      <AddNote 
        setNotes={setNotes} 
        noteObj={noteObj} 
        setNoteObj={setNoteObj}
      />
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  )
}