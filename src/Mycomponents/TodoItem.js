import React from "react";

export const TodoItem = ({ mytodo, onDelete = () => {} }) => {
  return (
    <div>
      <h4> {mytodo.title}</h4>
      <p>{mytodo.desc}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(mytodo);
        }}
      >
        delete
      </button>
    </div>
  );
};
