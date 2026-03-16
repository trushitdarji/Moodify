import React from "react";
import "../style/MoodTime.scss";

const MoodTime = ({ mood }) => {
  const moodMessages = {
    happy:
      "You are feeling happy. I will suggest you a happy song.listen to it and enjoy your day",
    sad: "You look sad. Maybe a calm song will help you relax.listen to it and feel better and get ready to face the world",
    surprised:
      "You seem surprised. How about an upbeat song to match your mood? listen it and get more surprised and more energetic",
    neutral: "You look neutral. I will suggest a balanced playlist.",
  };

  const moodemoji = {
    happy: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13H15C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13H7ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"></path>
      </svg>
    ),
    sad: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM7 17H9C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17H17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17ZM8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5C6.5 10.3284 7.17157 11 8 11ZM16 11C16.8284 11 17.5 10.3284 17.5 9.5C17.5 8.67157 16.8284 8 16 8C15.1716 8 14.5 8.67157 14.5 9.5C14.5 10.3284 15.1716 11 16 11Z"></path>
      </svg>
    ),
    surprised: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>Face-surprise SVG Icon</title>
        <path
          fill="currentColor"
          d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-79.6-336a32 32 0 1 1 0 64a32 32 0 1 1 0-64m128 32a32 32 0 1 1 64 0a32 32 0 1 1-64 0M256 288a64 64 0 1 1 0 128a64 64 0 1 1 0-128"
        />
      </svg>
    ),
  };

  const key = mood?.toLowerCase();
  const emoji = moodemoji[key] || (
    <svg style={{color: "#f8520b",width:" 5rem",}}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Bomb-emoji-bold SVG Icon</title>
      <path
        fill="currentColor"
        d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.558.558 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.558.558 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.558.558 0 0 0 .314-.315z"
      />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M17 14.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-5 2.25a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5zm2-4.25c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5s.448 1.5 1 1.5"
        clip-rule="evenodd"
      />
      <path
        fill="currentColor"
        d="m16.767 8.294l-.75.75a8.555 8.555 0 0 0-1.06-1.061l.75-.75l.76.3z"
      />
    </svg>
  );

  const message =
    moodMessages[key] ||
    "Detect your mood to get music suggestions!";

  return (
    <div className="mood-container">
      <div className="emoji">
        <span className="emoji1">{emoji}</span>
      </div>
      <div className="mood-right">
        <div className="mood">
          <h3>{mood}</h3>
        </div>
        <div className="para">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default MoodTime;
