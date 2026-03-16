import FaceExpression from "../../Expression/components/FaceExpression";
import Player from "../components/Player";
import { useSong } from "../hooks/useSong";

const Home = () => {
  const { handleGetSong } = useSong();

  return (
    <div>
      <div className="left">
      <FaceExpression
        onClick={(expression) => {handleGetSong({mood:expression})}}
      />
      </div>
      <Player />
    </div>
  );
};

export default Home;
