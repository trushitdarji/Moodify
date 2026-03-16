import { createContext } from "react";
import { useState } from "react";

export const songContext = createContext()

export  const SongContextProvider = ({children})=>{

    const [song, setSong] = useState({
        "url": "https://ik.imagekit.io/ckgxka10i/cohort-2/moodify/songs/Jatt_Mehkma__RiskyjaTT.CoM__TUN8Aag2Z.mp3",
        "posterUrl":"https://ik.imagekit.io/ckgxka10i/cohort-2/moodify/posters/Jatt_Mehkma__RiskyjaTT.CoM__xdetR_X72.jpeg",
        "title":"Jatt Mehkma (RiskyjaTT.CoM)",
        "mood":"happy"})

    const [loading, setLoading] = useState(true)

    return(
        <songContext.Provider value={{loading,setLoading,song,setSong}}>
            {children}
        </songContext.Provider>
    )
}