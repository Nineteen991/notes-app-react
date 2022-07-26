import { useState } from 'react'

export default function AddNote() {
    const [notes, setNotes] = useState([])
    
    return (
        <div className='add-note'>
            <h1 className='add-note-title'>Add Note</h1>
            <input 
                id='add-note-input' 
                placeholder='Note title' 
                required
            />
            <textarea 
                id='add-note-textarea' 
                placeholder='Note details' 
                required
                rows='5'
            />
            <button 
                id='add-note-btn' 
                class='btn'
            >
                Add Note
            </button>
        </div>
    )
}