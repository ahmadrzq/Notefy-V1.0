import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.scss'
import NewNoteForm from './NewNoteForm'
import NoteList from './NoteList'
import CompleteNotes from './CompleteNotes'

function App() {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  function completeToggle(id) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          todo.completed = true
        }
        return todo
      })
    })
  }

  function unCompleteToggle(id) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          todo.completed = false
        }
        return todo
      })
    })
  }

  function deleteNotes(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <h1 className='title'>Notefy V1.0</h1>
      <NewNoteForm addTodo={addTodo} />
      <NoteList todos={todos} completeToggle={completeToggle} deleteNotes={deleteNotes} />
      <CompleteNotes todos={todos} unCompleteToggle={unCompleteToggle} deleteNotes={deleteNotes} />
    </>
  )
}

export default App
