import React from "react";
import '../styles/App.css';
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

function PreviewEvent() {
  const history = useHistory();

  function handleClick() {
      history.push("/CreateEvent");
  }

  return (
    <div className="App">
      <Header />
      <body></body>
    </div>
  );
}

export default PreviewEvent;
