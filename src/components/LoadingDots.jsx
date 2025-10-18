import React from "react";
import "./LoadingDots.css";

const LoadingDots = () => {
  return (
    <div className="loading-container">
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Loading</p>
    </div>
  );
};

export default LoadingDots;
