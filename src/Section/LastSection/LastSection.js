import React from "react";
import "./LastSection.scss";

function LastSection() {
  return (
    <div class="contain-sec" id="contact">
      <form action="" class="conForm">
        <div class="formCon">
          <h2>Contact Me</h2>
          <div class="row100">
            <div class="col">
              <div class="inBox">
                <input type="text" name="fname" required="required" />
                <span class="text">First Name</span>
                <span class="line"></span>
              </div>
            </div>
            <div class="col">
              <div class="inBox">
                <input type="text" name="lname" required="required" />
                <span class="text">Last Name</span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="row100">
            <div class="col">
              <div class="inBox">
                <input type="text" name="email" required="required" />
                <span class="text">Email</span>
                <span class="line"></span>
              </div>
            </div>
            <div class="col">
              <div class="inBox">
                <input type="text" name="subject" required="required" />
                <span class="text">Subject</span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="row100">
            <div class="col">
              <div class="inBox messageIn">
                <textarea
                  name="message"
                  type="text"
                  id="textarea"
                  rows="10"
                  cols="30"
                  required="required"
                ></textarea>
                <span class="text">Type your message here...</span>
                <span class="line"></span>
              </div>
            </div>
          </div>
          <div class="row100">
            <div class="col">
              <input type="submit" value="Send" id="conSubBtn" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LastSection;
