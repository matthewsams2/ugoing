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
            <h6 class="eventOrganizerContactInfo_text default_text_style default_header_text">Organizer Contact Info</h6>
            <div class="toggle_container eventOrganizerContactInfo_toggle">
              <div>
                <p class="eventOrganizerContactInfo_toggle_text default_text_style"><i>Do you want to add a phone number for attendees to contact?</i></p>
              </div>
              <div>
                <label class="rounded_switch">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <input class="eventOrganizerContactInfo_phone_input input_padding input_size default_text_style" type="text" id="eventOrganizer_phone" name="eventOrganizer_phone" maxlength="15" placeholder="+1 650 963 6030"></input>
            <p class="eventOrganizerContactInfo_name_text default_text_style "><i>Who's phone number is this?</i></p>
            <input class="eventOrganizerContactInfo_name_input input_padding input_size default_text_style" type="text" id="eventOrganizer_name" name="eventOrganizer_name" maxlength="30" placeholder="Kenta"></input>
            <h6 class="eventPassword_text default_text_style default_header_text">Password</h6>
            <div class="toggle_container eventPassword_toggle">
              <div>
                <p class="eventPassword_toggle_text default_text_style"><i>Add a password to your event.</i></p>
                <p class="eventPassword_toggle_text_2 default_text_style"><i>People with the link will not be able view event details without a password</i></p>
              </div>
              <div>
                <label class="rounded_switch">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <p class="eventPassword_password_text default_text_style "><i>enter your password</i></p>
            <input class="eventPassword_password_input input_padding input_size default_text_style" type="password" id="eventPassword_password" name="eventPassword_password" maxlength="30" placeholder="•••••••••"></input>
            <p class="eventPassword_confirm_text default_text_style "><i>re-enter your password</i></p>
            <input class="eventPassword_confirm_input input_padding input_size default_text_style" type="password" id="eventPassword_confirm" name="eventPassword_confirm" maxlength="30" placeholder="••••••••••"></input>
            <h6 class="eventRSVP_text default_text_style default_header_text">RSVP</h6>
            <div class="toggle_container eventRSVP_toggle">
              <div>
                <p class="eventRSVP_toggle_text default_text_style"><i>Do you want attendants to be able to RSVP to your event?</i></p>
                <p class="eventRSVP_toggle_text_2 default_text_style"><i>Attendants with the link will be able to put their name down to and others will be able to see who has RSVP’d<br></br>*you will need to create an account in order to allow for RSVP’s</i></p>
              </div>
              <div>
                <label class="rounded_switch">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <input class ="preview_button default_text_style" type="submit" value="Preview" onClick={handleClick}></input>
          </form>
          <p class="eventAlmostDone_text default_text_style">You're almost done!</p>
        </div>
      </body>
      <Footer />
    </div>
  );
}

export default CreateEvent;