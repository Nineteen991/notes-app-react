import { useState, useEffect } from 'react'

export default function Notes({notes, setNotes}) {
  const [noteElements, setNoteElements] = useState(null)

  function deleteAllNotes() {
    setNotes([])
  }

  function deleteNote(id) {
    const notesToKeep = notes.filter(note => note.id !== id)
    setNotes(notesToKeep)
  }

  function editNote(id) {
    const noteToEdit = notes.filter(note => note.id === id)
    console.log(noteToEdit)
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
              onClick={() => editNote(note.id)}
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