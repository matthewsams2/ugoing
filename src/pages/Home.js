import React from "react";
import '../styles/App.css';
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  const history = useHistory();

  function handleClick() {
      history.push("/CreateEvent");
  }

  return (
    <div className="App">
      <Header />
      <body>
        <h1 class="intro_text default_text_style">Share events in Seconds</h1>
          
        <button class="create_event_button default_text_style" onClick={handleClick}>Create New Event</button>

          
        <h2 class="desc_header_text default_text_style">How it Works</h2>
          <p class="desc_text default_text_style">
          To create an event, click on Create Event then 
          fill out basic information like Event Name, Location...
          </p>
      </body>
    </div>
  );
}

export default Home;
