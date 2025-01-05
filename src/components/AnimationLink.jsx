import React, { useState } from "react";

const AnimationLink = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true); // Show the loading icon
    setTimeout(() => {
      window.location.href = "/test_animate.html"; // Redirect to the animation page
    }, 3500); // Delay before navigating (adjust as needed)
  };

  return (
    <div style={{ textAlign: "center" }}>
      
      {isLoading ? (
        // Display the loading icon while isLoading is true
        <div className="loading-icon">
          <img
            src="/images/arona_kira-kira.gif" // Path to your loading icon
            alt="Loading..."
            width="300"
            height="300"
          />
        </div>
      ) : (
        // Show the play button if not loading
        <a onClick={handleClick}>
          <img
            src="/images/playbutton.png"
            width="300"
            height="300"
            className="playbtn"
            alt="Play"
            style={{ cursor: "pointer" }}
          />
        </a>
      )}
    </div>
  );
};

export default AnimationLink;
