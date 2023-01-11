import "./App.css";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 col">
            <div className="card card-input">
              <h1 className="title">Aplikasi Todo list</h1>
              <input
                class="form-control form-control-sm input-list"
                type="text"
                required="true"
                placeholder="Input List"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
              <button
                type="button"
                class="btn btn-sm btn-primary"
                onClick={() => addTodo(input)}
              >
                Tambah List
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 col">
            <div className="card card-input">
              {list.map((todo) => (
                <div className="row" key={todo.id}>
                  <div className="col-lg-10 col-md-10 col-sm-10 col-text">
                    <h5>{todo.todo}</h5>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <button
                      type="button"
                      class="btn btn-sm btn-danger"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
