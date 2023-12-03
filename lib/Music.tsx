"use client";

import { useState } from "react";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "#f4f4f5",
          color: "#1f1e1e",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
        }}
        id="music"
      >
        {isPlaying ? "Stop Music" : "Play Music"}
      </button>
      {isPlaying && <audio src="/audio/audio.mp3" autoPlay />}
    </div>
  );
}
