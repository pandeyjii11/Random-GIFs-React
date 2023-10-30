
import React, {useState } from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";



const Tag = () => {
    
    const [tag, setTag] = useState("");

    const {gif, loading, fetchData} = useGif(tag);

    return(
        <div className="w-1/2 bg-blue-500 rounded-xl border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl underline uppercase font-semibold mt-[15px]">
                Random {tag} Gif
            </h1>
            {
                loading? <Spinner/> : <img src={gif} alt="GIF" width="450" height="450"/> 
            }

            <input
            type="text"
            className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
            onChange={(event) => setTag(event.target.value)}
            value={tag}
            />

            
            <button className="bg-white opacity-80 w-10/12 text-lg py-2 rounded-lg mb-[20px]"
            onClick={() => fetchData(tag)}
            >
                Generate Random GIF
            </button>
        </div>
    )
}

export default Tag;