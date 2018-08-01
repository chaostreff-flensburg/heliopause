import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <img
            src="/static/spaceapi.png"
            alt="SpaceAPI Logo by @blinry, CC-BY-SA 4.0"
          />
          <a href="http://spaceapi.net/documentation" target="_blank" rel="noreferrer">
            Space API Reference
          </a>
        </header>
        <style jsx>{`
          header {
            position: relative;

            margin-top: 20px;
          }
          img {
            width: auto;
            height: 70px;

            margin-left: 2px;
          }
          a {
            position: absolute;
            bottom: 0;
            right: 2px;

            color: rgb(6, 132, 248);
            text-decoration: none;
          }
          @media (max-width: 719px) {
            header {
              margin: 0 12px;
              margin-top: 16px;
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}
