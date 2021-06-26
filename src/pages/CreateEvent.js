import React from "react";
import '../styles/App.css';
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
        <form>
          <div class="addEventCover_button_container">
              <div class="addEventCover_item"></div>
              <div class="addEventCover_item">
                  <div class="plus radius"></div>
              </div>
              <div class="addEventCover_item">
                  <p class="addEventCover_text"><i>Add Event Cover Photo</i></p>
              </div>
          </div>
          <h1 class="eventName_text default_text_style default_header_text">Event Name</h1>
          <input class="eventName_input input_padding input_size default_text_style" type="text" id="eventName" name="eventName" maxlength="60" placeholder="Graduation Party"></input>
          <h2 class="eventDescription_text default_text_style default_header_text">Event Description</h2>
          <textarea class="eventDescription_textarea input_padding input_size default_text_style" type="text" id="eventName" name="eventName" maxlength="2500" 
            placeholder="Are you interested in the epic ~20 person camping adventure to be the weekend of Aug 7? If so please respond going (gathering interest) more details to come 🏕🔥&#13;&#10;
            Basic info&#13;&#10;
            - ~5 others not on this list were invited - they just don't have fb&#13;&#10;
            - if you have a few you want to invite, message me so we can work something out">
          
          </textarea>
          <h3 class="eventTime_text default_text_style default_header_text">Time</h3>
          <p class="eventStartTime_text default_text_style"><i><u>Start Time:</u></i></p>
          <p class="eventEndTime_text default_text_style"><i><u>End Time:</u></i></p>
          <div class="toggle_container eventEndTime_toggle">
            <div>
              <p class="eventEndTime_toggle_text default_text_style">No Set Event End Time</p>
            </div>
            <div>
              <label class="rounded_switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
              </label>
            </div>
          </div>
          <h4 class="eventLocation_text default_text_style default_header_text">Location</h4>
          <h5 class="eventArrivalInstructions_text default_text_style default_header_text">Arrival Instructions</h5>
          <textarea class="eventArrivalInstructions_textarea input_padding input_size default_text_style" 
          type="text" id="eventArrivalInstructions" name="eventArrivalInstructions" maxlength="100" placeholder="Make sure to park on Moffett"></textarea>
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
        
      </body>
      <Footer />
    </div>
  );
}

export default CreateEvent;