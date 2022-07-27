export default function AddNote({setNotes, noteObj, setNoteObj}) {

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

    function submitNote(e) {
        e.preventDefault()
        setNotes(prev => (
            [
                ...prev,
                noteObj
            ]
        ))
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
                    onChange={e => addNote(e)}
                />
                <textarea 
                    id='add-note-textarea' 
                    placeholder='Note details'
                    name='noteDetails'
                    // value={noteObj.noteDetails}
                    required
                    rows='5'
                    onChange={e => addNote(e)}
                />
                <button
                    type='submit'
                    id='add-note-btn' 
                    className='btn'
                >
                    Add note
                </button>
            </form>
        </div>
    )
}