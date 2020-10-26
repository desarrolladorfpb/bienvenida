import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./configuration.json";
//https://lottiefiles.com/29373-maintenance-icon
class LottieConfiguration extends Component {
  state = { isStopped: false, isPaused: false };

  render() {
    

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className="controlled">
        <Lottie
          options={defaultOptions}
          width={"30%"}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default LottieConfiguration;