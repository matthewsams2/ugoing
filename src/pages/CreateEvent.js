import React from "react";
import '../styles/App.css';
import '../styles/CreateEvent.css';
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

function CreateEvent() {

  const history = useHistory();

  function handleClick() {
    history.push("/PublishedEvent");
  }

  return (
    <div className="App">
      <Header />
      <body>
        <div class="main_box">
          <form>
            <div>
              <div class="eventHeader_box toggle_container">
                <h1 class="eventBasics_text default_text_style default_header_text">The Basics ✏️</h1>
                <a href="" class="default_text_style"><u>edit</u></a>
              </div>
              <div class="outlined_box">
                <h2 class="default_text_style default_header_text">Gradutation Party</h2>
                <h3 class="defautl_text_style default_header_text eventDescription_subHeader">Event Description</h3>
                <p class="default_text_style eventDescription_text">
                  Come one, come all to celebrate John graduating with his Master's degree!<br></br>
                  THIS IS A SURPRISE PARTY SO PLS DO NOT SAY ANYTHING 🙂 <br></br>
                  Feel free to bring any alcohol or snack you may be feeling, but we'll have some drinks and wine for the enjoying here. <br></br>
                  Around 9-10pm, we will be going down Castro and getting some drinks! 
                </p>
              </div>
            </div>
            <div>
              <div class="eventHeader_box toggle_container">
                <h4 class="eventTime_text default_text_style default_header_text">Time 🕐</h4>
                <a href="" class="default_text_style"><u>edit</u></a>
              </div>
              <div class="outlined_box">
                <div class="eventTime_box toggle_container">
                  <text class="default_text_style"><b>Start Time</b></text>
                  <text class="default_text_style">June 13, 8:00pm PDT</text>
                </div>
                <div class="eventTime_box toggle_container">
                  <text class="default_text_style"><b>End Time</b></text>
                  <text class="default_text_style">June 13, 11:00pm PDT</text>
                </div>
              </div>
            </div>
            <div>
              <div class="eventHeader_box toggle_container">
                <h5 class="eventTime_text default_text_style default_header_text">The Where 🌎</h5>
                <a href="" class="default_text_style"><u>edit</u></a>
              </div>
              <div class="outlined_box">
                <h6 class="eventTime_text default_text_style default_header_text">Address</h6>
                <p class="default_text_style eventLocation_subText">100 Moffett Blvd, Mountain View</p>
                <h7 class="eventTime_text default_text_style default_header_text"><b>Arrival Instructions</b></h7>
                <p class="default_text_style eventLocation_subText">There’s guest parking in Lot B!</p>
              </div>
            </div>
            <div>
              <div class="eventHeader_box toggle_container">
                <h6 class="eventTime_text default_text_style default_header_text">Organizer Contact Info 📞</h6>
                <a href="" class="default_text_style"><u>edit</u></a>
              </div>
              <div class="outlined_box">
                <div class="eventTime_box toggle_container">
                  <text class="default_text_style"><b>Phone</b></text>
                  <text class="default_text_style"><u>650-123-4567</u></text>
                </div>
                <div class="eventTime_box toggle_container">
                  <text class="default_text_style"><b>Person</b></text>
                  <text class="default_text_style">Peter Parker</text>
                </div>
              </div>
            </div>
            <div>
              <div class="eventPublish_box">
                <a href="" class="default_text_style"><u>edit</u></a>
                <button class="blue_button default_text_style eventPreview_button" onClick={handleClick}>Preview</button>
              </div>
            </div>
            <p class="eventAlmostDone_text default_text_style">You're almost done!</p>
          </form>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default CreateEvent;