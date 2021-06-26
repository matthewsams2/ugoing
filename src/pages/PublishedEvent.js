import React from "react";
import '../styles/App.css';
import '../styles/PublishedEvent.css'
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet} from 'react-helmet';

import shareButton from "../assets/Share_Button.png";


const Title = 'Publish Event'

function PublishedEvent() {
  const history = useHistory();

  function handleClick() {
      history.push("/CreateEvent");
  }

  return (
    <div className="App">
        <head>
            <Helmet>
                <title>{ Title }</title>
            </Helmet>    
        </head>
        
        <body>
            <Header />
            <div class="main-box">
                <h1 class="publishedEventName_text default_text_style default_header_text">Graduation Party</h1>
                <textarea class="publishedEventDescription_textarea input_padding input_size default_text_style" 
                    type="text" id="publishedEventDescription" name="publishedEventDescription" readonly onfocus="this.blur()"
                    placeholder="Congratulations! You’ve created your first event. 👏🎉&#13;&#10;To edit and save all your past events">
                
                </textarea>
                <div class="toggle_container shareEvent_toggle">
                    <h2 class="shareEvent_text">Share Graduation Party</h2>
                    <img src={shareButton} alt="ShareButton" class="shareButton"></img>
                </div>
                <button class="create_account_button default_text_style" onClick={handleClick}>Create an Account</button>
                <p class="create_account_button_text">(it only takes 30 seconds)</p>
                <button class="create_newEvent_button default_text_style" onClick={handleClick}>Create Another Event</button>
            </div>
            <Footer />
        </body>
    </div>
  );
}

export default PublishedEvent;
