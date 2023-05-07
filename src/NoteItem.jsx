import React from 'react'

export default function NoteItem({ id, title, completed, completeToggle, unCompleteToggle, deleteNotes }) {
    return (
        <div className="item" key={id}>
            <p className="content">{title}</p>
            <div className="actions">
                {completed === false ?
                    <button onClick={() => completeToggle(id)}>Complete</button> :
                    <button onClick={() => unCompleteToggle(id)}>Uncomplete</button>
                }
                <button onClick={() => deleteNotes(id)}>Delete</button>
            </div>
        </div>
    )
}
