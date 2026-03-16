import FaceExpression from "../../Expression/components/FaceExpression";
import Player from "../components/Player";
import { useSong } from "../hooks/useSong";
import MoodTime from "../components/MoodTime";
import { useState } from "react";

const Home = () => {
  const { handleGetSong } = useSong();

  const [mood, setmood] = useState("Nuetral");

  return (
    <div>
      <div className="left">
        <FaceExpression
          onClick={(expression) => {
            setmood(expression)
            handleGetSong({ mood: expression });
          }}
        />  
      </div>
      <div className="center">
      <Player />
      <MoodTime mood={mood} />
      </div>
    </div>
  );
};

export default Home;
