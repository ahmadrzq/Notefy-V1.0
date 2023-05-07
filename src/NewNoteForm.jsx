import { useState } from 'react'

const NewNoteForm = ({ addTodo }) => {
    const [newNote, setNewNote] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newNote === "") return
        addTodo(newNote)
        setNewNote("")
    }

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <h1>Add Notes</h1>
            <div className="form-group">
                <label htmlFor="item">New Item</label>
                <input
                    value={newNote}
                    onChange={e => setNewNote(e.target.value)}
                    type="text" className="form-control" id='item' />
            </div>
            <div className="form-submit">
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}

export default NewNoteForm