import React from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { ActionFor } from "./action";

export default function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter :- {counter}</h1>
      <button onClick={() => dispatch(ActionFor())}> + </button>
    </div>
  );
}
