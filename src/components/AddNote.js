export default function AddNote(props) {
    const {setNotes, noteObj, setNoteObj, editNote, setEditNote} = props

    function handleChange(e) {
        editNote[0] ? editingNote(e) : addNote(e)
    }

    function addNote(e) {
        const { name, value } = e.target
        setNoteObj(prev => (
            {
                ...prev,
                [name]: value,
                id: Math.floor(Math.random() * 100000) + 1
            }
        ))
    }

    function editingNote(e) {
        const { name, value } = e.target
        setNoteObj(prev => (
            {
                ...prev,
                [name]: value,
            }
        ))
    }

    function submitNote(e) {
        e.preventDefault()
        // if a note is being edited; map & update that note
        if (editNote[0]) {
            setNotes(prev => (
                prev.map(note => (
                    note.id === editNote[1].id
                        ? {
                            ...note, 
                            noteTitle: noteObj.noteTitle,
                            noteDetails: noteObj.noteDetails
                          }
                        : note
                ))
            ))
        // if we're not editing a note; just add the new note to the array
        } else if (!editNote[0]) {
            setNotes(prev => (
                [
                    ...prev,
                    noteObj
                ]
            ))
        } else {
            throw new Error('something broke the submit note')
        }
        
        // clear the note object & the form & setEditNote to false
        setNoteObj({
            noteTitle: '',
            noteDetails: ''
        })
        setEditNote([false, {}])
        e.target.reset()
    }

    return (
        <div className='add-note'>
            <h1 className='add-note-title'>Add Note</h1>
            <form onSubmit={submitNote}>
                <input 
                    id='add-note-input' 
                    placeholder='Note title' 
                    name='noteTitle'
                    value={noteObj.noteTitle}
                    required
                    onChange={e => handleChange(e)}
                />
                <textarea 
                    id='add-note-textarea' 
                    placeholder='Note details'
                    name='noteDetails'
                    value={noteObj.noteDetails}
                    required
                    rows='5'
                    onChange={e => handleChange(e)}
                />
                <button
                    type='submit'
                    id='add-note-btn' 
                    className='btn'
                >
                    { editNote[0] ? `Edit note ` : 'Add note' }
                </button>
            </form>
        </div>
    )
}