import React, { useEffect, useState } from "react";
import { AddTodo } from "./AddTodo";
import { Mytodo } from "./Mytodo";

function Home() {
  let initmyTodo;
  const [myTodo, setmyTodo] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done",
    },
    {
      sno: 2,
      title: "Go to the moll",
      desc: "You need to go to the moll to get this job done2",
    },
    {
      sno: 3,
      title: "Go to the home",
      desc: "You need to go to the home to get this job done3",
    },
  ]);
  useEffect(() => {
    localStorage.setItem("myTodo", JSON.stringify(myTodo));
  }, [myTodo]);
  if (localStorage.getItem("myTodo") === null) {
    initmyTodo = [];
  } else {
    initmyTodo = JSON.parse(localStorage.getItem("myTodo"));
  }

  const onDelete = (mytodo) => {
    console.log("I am ondelete of mytodo", mytodo);
    setmyTodo(() =>
      myTodo.filter((e) => {
        return e !== mytodo;
      })
    );
    localStorage.setItem("myTodo", JSON.stringify(myTodo));
  };

  const addTodos = (title, desc) => {
    let sno;
    if (myTodo.length === 0) {
      sno = 0;
    } else {
      sno = myTodo[myTodo.length - 1].sno + 1;
    }

    const todoDetails = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setmyTodo([...myTodo, todoDetails]);
    console.log(myTodo);
  };
  return (
    <>
      <AddTodo addTodos={addTodos} />
      <Mytodo myTodo={myTodo} onDelete={onDelete} />
    </>
  );
}

export default Home;
