import React from 'react'
import NoteItem from './NoteItem'

export default function CompleteNotes({ todos, unCompleteToggle, deleteNotes }) {
    return (
        <div className="completeList">
            <h1>Completed Notes</h1>
            <div className="complete-wrapper">
                {todos.filter(todo => todo.completed === true).length === 0 && <p className="empty">No Item</p>}
                {todos.filter(todo => todo.completed === true).map(todo => {
                    return (
                        <NoteItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} unCompleteToggle={unCompleteToggle} deleteNotes={deleteNotes}/>
                    )
                })}
            </div>
        </div>
    )
}
