import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="Titles">
          <div className="Column">
            <img src={require("../assets/logo.svg")} alt="" />
          </div>
          <div className="Column SmallWidth">
            <h3>Support</h3>
          </div>
          <div className="Column SmallWidth">
            <h3>About US</h3>
          </div>
          <div className="Column">
            <h3>Get Newsletter</h3>
          </div>
        </div>
        <div className="Content">
          <div className="Column">
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
              <br />
              USA & CAN: 1-888-123-4567
              <br />
              Address: 34 Brokel Rd. NY
            </p>
          </div>
          <div className="Column SmallWidth">
            <p>
              Help Center
              <br />
              Get Started
              <br />
              Contact US
            </p>
          </div>
          <div className="Column SmallWidth">
            <p>
              About US
              <br />
              Terms of Use
              <br />
              Privacy Policy
            </p>
          </div>
          <div className="Column">
            <div>
              <form action="">
                <input type="email" placeholder="email" name="" id="" />
                <input type="submit" value="" />
              </form>
            </div>
            <div className="Social">
              <img src={require("../assets/facebook.svg")} alt="" />
              <img src={require("../assets/instagram.svg")} alt="" />
              <img src={require("../assets/twitter.svg")} alt="" />
              <img src={require("../assets/snapchat.svg")} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
