
import React from "react";
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";



const Random = () => {

    const {gif, loading, fetchData} = useGif();

    return(
        <div className="w-1/2 bg-green-500 rounded-xl border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl underline uppercase font-semibold mt-[15px]">
                A Random Gif
            </h1>
            {
                loading? <Spinner/> : <img src={gif} alt="GIF" width="450"/> 
            }
            <button className="bg-white opacity-80 w-10/12 text-lg py-2 rounded-lg mb-[20px]"
            onClick={ () => fetchData()}
            >
                Generate Random GIF
            </button>
        </div>
    )
}

export default Random;