import React from "react";
import { TodoItem } from "./TodoItem";

export const Mytodo = (props) => {
  console.log(props);
  let mystyle = {
    minHeight: "70vh",
    margin: "60px auto",
  };
  return (
    <div className="container my-4" style={mystyle}>
      <h3 className="my-3"> Todos List</h3>
      {props.myTodo.length === 0 ? (
        <div className="card" style={{ width: "18px" }}>
          <div className="card-mytodo">
            <h5 className="No Mytodo"></h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">
              No myTodo To Display
            </a>
          </div>
        </div>
      ) : (
        props.myTodo.map((todo, index) => {
          return (
            <div key={index}>
              <TodoItem
                mytodo={todo}
                key={todo.sno}
                onDelete={props.onDelete}
              />
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};
