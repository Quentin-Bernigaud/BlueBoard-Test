import React from "react";

export default class Description extends React.Component {
  render() {
    return (
      <div className="Description">
        <div className="Content">
          <img src={require("../assets/macbook.png")} alt="" />
          <div className="RightContent">
            <p className="Category">New design</p>
            <h2>
              Responsive design, just need your tap <span>....</span>
            </h2>
            <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Donec id elit non mi porta gravida at eget metus.
              Curabitur blandit tempus porttitor. Etiasem malesuada magn.
              Vestibulum felis euismod semper.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
