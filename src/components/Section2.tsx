import React from "react";

export default class Section2 extends React.Component {
  render() {
    return (
      <div className="Section2">
        <div className="Section2Left">
          <p className="Category">New design</p>
          <h2>
            There is no other platform for you <span>....</span>
          </h2>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Donec id elit non mi porta gravida at eget metus.
            Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna
            mollis euismod. Vestibulum id ligula porta felis euismod semper.
          </p>
          <p>
            Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur.
            Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia
            bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra
            augue.
          </p>
        </div>
        <div className="Section2Right">
            <div className="Diagonal"></div>
        </div>
      </div>
    );
  }
}
