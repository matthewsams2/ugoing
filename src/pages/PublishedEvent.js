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
                <div class="eventHeader_box toggle_container">
                    <h1 class="publishedEventName_text default_text_style default_header_text">Graduation Party</h1>
                    <a href="" class="default_text_style"><b><u>View Event</u></b></a>
                </div>
                <div class="outlined_box">
                    <h2 class="default_text_style default_header_text">Congratulations 👏🎉</h2>
                    <p class="default_text_style">You’ve created your first event. Graduation Party
                    <p class="default_text_style bottom_text"></p>Click below to share your event with friends</p>
                </div>
                <div class="toggle_container shareEvent_box">
                    <img src={shareButton} alt="ShareButton" class="shareButton"></img>
                    <h3 class="shareEvent_text">Share Graduation Party</h3>
                    <div></div>
                </div>
                <div class="outlined_box_columns shareLink_box">
                    <a href="" class="copyLink_text default_text_style"><u>https://ugoing.us/graduation...</u></a>
                    <button class="copyLink_Button default_text_style"><b>COPY</b></button>
                </div>
                <button class="blue_button default_text_style createAccount_button" onClick={handleClick}>Create an Account</button>
                <p class="create_account_button_text">(it only takes 30 seconds 😁)</p>
                <button class="blue_button default_text_style createEvent_button" onClick={handleClick}>Create Another Event 📅</button>
            </div>
            <Footer />
        </body>
    </div>
  );
}

export default PublishedEvent;
