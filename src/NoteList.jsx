import React, { useState } from 'react'
import NoteItem from './NoteItem'

export default function NoteList({ todos, completeToggle, deleteNotes }) {
    return (
        <div className="noteList">
            <h1>List Notes</h1>
            <div className="item-wrapper">
                {todos.filter(todo => todo.completed === false).length === 0 && <p className="empty">No Item</p>}
                {todos.filter(todo => todo.completed === false).map(todo => {
                    return (
                        <NoteItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} completeToggle={completeToggle} deleteNotes={deleteNotes} />
                    )
                })}
            </div>
        </div>
    )
}
