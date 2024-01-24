import React from "react";

function Background() {
  return (
    <>
      <div className="w-full h-screen fixed">
        <div className=" absolute top-[5%] w-full py-10 flex justify-center font-semibold text-white text-xl">Documents.</div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[17vw] font-semibold text-zinc-300"> DOCS. </h1>
      </div>
    </>
  );
}

export default Background;
