import { useState, useEffect } from 'react'

export default function Notes({notes, setNotes, setNoteObj, setEditNote}) {
  const [noteElements, setNoteElements] = useState(null)

  function deleteAllNotes() {
    // reset all the states
    setNotes([])
    setEditNote([false, {}])
    setNoteObj({
      noteTitle: '',
      noteDetails: ''
    })
  }

  function deleteNote(id) {
    const notesToKeep = notes.filter(note => note.id !== id)
    setNotes(notesToKeep)
  }

  function editingNote(id) {
    // get the note that needs to be edited
    const noteToEdit = notes.filter(note => note.id === id)
    // save that note & set true
    setEditNote([true, noteToEdit[0]])
    // set the note obj so we can edit on the AddNote file
    setNoteObj({
      noteTitle: noteToEdit[0].noteTitle,
      noteDetails: noteToEdit[0].noteDetails,
      id: noteToEdit[0].id
    })
  }

  useEffect(() => {
    const noteElem = notes.map((note, index) => (
      <li className='your-notes-li' key={note.id}>
        <div className='your-notes-header'>
          <h4 className='your-notes-number'>Note {index + 1}</h4>
          <div className='btns-div'>
            <button 
              className='btn' 
              id='delete-btn'
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
            <button 
              className='btn' 
              id='edit-btn'
              onClick={() => editingNote(note.id)}
            >
              Edit
            </button>
          </div>
        </div>
        <h4 className='your-notes-title'>{note.noteTitle}</h4>
        <p className='your-notes-details'>{note.noteDetails}</p>
      </li>
    ))
    setNoteElements(noteElem)
  }, [notes])

  return (
    <div className='your-notes'>
      <h1 className="add-note-title">Your Notes</h1>
      <button 
        id='delete-all-notes' 
        className='btn' 
        onClick={deleteAllNotes}
      >
        Delete all notes
      </button>
      <ul id='your-notes-ul'>{ noteElements }</ul>
    </div>
  )
}