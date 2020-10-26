import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./welcome.json";

class LottieWelcome extends Component {
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
          //width={"50%"}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default LottieWelcome;