import React, { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    // Dynamically load the chibi_test.js script
    const script = document.createElement("script");
    script.src = "/test_animate.js"; // Path to your chibi_test.js file in the public folder
    script.async = true;
    script.onload = () => {
      console.log("Animation script loaded!");
      // You can initialize your animation here if necessary
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <h1>My Animation</h1>
      {/* Ensure the canvas element is present for CreateJS */}
      <canvas id="canvas" width="1920" height="1080"></canvas>
    </div>
  );
};

export default Animation;
