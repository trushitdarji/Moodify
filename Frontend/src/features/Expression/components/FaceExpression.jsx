import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";

export default function FaceExpression({ onClick = () => {} }) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const streamRef = useRef(null);

  const [expression, setExpression] = useState("Detecting...");

  useEffect(() => {
    init({ landmarkerRef, videoRef, streamRef });

    return () => {
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }

      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  async function handleClick() {
    const expression = detect({ landmarkerRef, videoRef, setExpression });

    if (!expression) {
      console.log("No face detected");
      return;
    }

    onClick(expression);
  }
  
  return (
    <div style={{display:"flex",gap:"20px", flexDirection:"column" , alignItems:"center" , position:"absolute",top:"50%",transform:"translateY(-50%)",left:"10%" , border:"1px solid #444", paddingBlock:"15px",paddingInline:"10px", borderRadius:"12px" , boxShadow:"1px 1px 5px 2px #0f0f0f"}}>
      <video
        ref={videoRef}
        style={{ width: "270px", borderRadius: "12px"}}
        playsInline
      />
      <h2>{expression}</h2>
      <button onClick={handleClick}>Detect expression</button>
    </div>
  );
}
