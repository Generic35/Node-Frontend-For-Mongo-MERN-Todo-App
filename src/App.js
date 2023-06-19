/* eslint-disable */
import { useState, useEffect } from 'react';

const API_BASE = "http://localhost:3001";

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    console.log('>>> getting todos')
    GetTodos();
    console.log('>>> todos: ', todos)
  }, [])

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then(res => res.json())
      .then(data => { setTodos(data); })
      .catch(err => { console.error('>>> error fetching todos: ', err) })
  }

  return (
    <div className="App">
      <h1>Welcome, Eric</h1>
      <h4>Your tasks</h4>
      <div className="todos">
        {todos.map(todo => {
          return (<div key={todo._id}
            className={"todo " + (todo.complete ? "is-complete" : "")}>
            <div className="checkbox">
              <div className="text">{todo.text}</div>
              <div className="delete-todo">
                x
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
