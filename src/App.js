import React from "react";
import Random from "./Components/Random";
import Tag from "./Components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center background relative overflow-x-hidden">
      <h1 className="rounded-lg bg-white text-center w-11/12 mt-[40px] px-10 py-2 text-4xl font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col items-center w-full gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
