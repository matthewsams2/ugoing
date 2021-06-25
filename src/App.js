//import logo from './logo.svg';

import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import history from './services/history';
import Routes from "./routes";

/*function App() {
  return (
    <div className="App">
      <body>
        <h1 class="intro_text default_text_style">Share events in Seconds</h1>
          <button class="create_event_button default_text_style">Create New Event</button>
          
        <h2 class="desc_header_text default_text_style">How it Works</h2>
          <p class="desc_text default_text_style">
          To create an event, click on Create Event then 
          fill out basic information like Event Name, Location...
          </p>
      </body>
    </div>
  );
}

export default App;
*/

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;