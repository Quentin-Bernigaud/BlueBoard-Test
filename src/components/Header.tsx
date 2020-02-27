import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <p className={"HeaderTitle"}>You will need no<br />other platform</p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="" target="_blank" className="HeaderPlayIcon"><img src={require("../assets/play.svg")} alt="play"/></a>
        <button className={"HeaderButton"}>TRY NOW</button>
        <p className={"HeaderNote"}>* No need to add cards details</p>
        <div className="VoidDiv"></div>
      </div>
    );
  }
}
