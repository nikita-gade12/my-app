import React, { useState } from "react";

export const AddTodo = ({ addTodos }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    addTodos(title, desc);
  };
  return (
    <div className="container my-3">
      <h3> Add a Mytodo</h3>
      <form onSubmit={submit}>
        <div className="mb-3" />
        <label
          htmlFor="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-label"
        >
          Todo title
        </label>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
        />

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Descriptoin
          </label>
          <input type="text" className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};