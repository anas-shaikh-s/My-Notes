import Loader from "react-loader-spinner";
import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends Component {
  render() {
    // const display = "flex";
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "80vh",
        }}
        className="loader"
      >
        <Loader
          type="Circles"
          color="#00BFFF"
          height={80}
          width={80}
          //   visible={false}
          // timeout={3000}
        />
      </div>
    );
  }
}
