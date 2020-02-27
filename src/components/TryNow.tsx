import React from "react";

export default class TryNow extends React.Component {
  render() {
    return (
      <div className="TryNow">
        <p className="Category">Contact us</p>
        <h2>Over 1000 designers are using ...</h2>
        <div className="Trial">
          <img src={require("../assets/ARROW.png")} alt="" />
          <p>30 days free trial for all.</p>
        </div>
        <form action="">
          <input type="text" placeholder="Full name" name="name" id="" />
          <input type="email" placeholder="Your email" name="email" id="" />
          <input type="password" placeholder="Password" name="password" id="" />
          <input type="submit" value="Try now" />
        </form>
        <p className="Legal">By signing up you agree to our <a href="" target="_blank">terms & Services</a>.</p>
      </div>
    );
  }
}
