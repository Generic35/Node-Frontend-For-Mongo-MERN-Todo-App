function App() {
  return (
    <div className="App">
      <h1>Welcome, Eric</h1>
      <h4>Your tasks</h4>
      <div className="todos">
        <div className="todo">
          <div className="checkbox">
            <div className="text">Get the bread</div>
            <div className="delete-todo">
              x
            </div>
          </div>
        </div>

        <div className="todo is-complete">
          <div className="checkbox">
            <div className="text">Get the milk</div>
            <div className="delete-todo">
              x
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
