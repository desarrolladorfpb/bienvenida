import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "./valores.json";
//https://lottiefiles.com/34533-business-team
class LottieValores extends Component {
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
          width={"50%"}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default LottieValores;