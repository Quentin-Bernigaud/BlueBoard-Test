import React from "react";

export default class Section3 extends React.Component {
  render() {
    return (
      <div className="Section3">
        <div className="Pictures">
          <img className="" src={require("../assets/penHolder.png")} alt=""/>
          <img className="" src={require("../assets/earphones.png")} alt=""/>
        </div>
        <p className="Category">New features</p>
        <h2>Some awesome features</h2>
        <div className="Features">
          <div className="Feature">
            <img src={require("../assets/feature1.png")} alt="" />
            <h3>Some awesome features</h3>
            <p>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
              Nulla vitae elit libero, a pharetra augue.</p>
          </div>
          <div className="Feature">
            <img src={require("../assets/feature2.png")} alt="" />
            <h3>Some awesome features</h3>
            <p>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
              Nulla vitae elit libero, a pharetra augue.</p>
          </div>
          <div className="Feature">
            <img src={require("../assets/feature3.png")} alt="" />
            <h3>Some awesome features</h3>
            <p>Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
              Nulla vitae elit libero, a pharetra augue.</p>
          </div>
        </div>
      </div>
    );
  }
}
