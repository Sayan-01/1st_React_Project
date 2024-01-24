import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null)
  return (
    <div ref = {ref} className="fixed flex z-[3] p-2 top-0 left-0 w-full h-full bg-sky-800/5">
      <Card reference={ref}/>
      <Card reference={ref}/>
      <Card reference={ref}/>
    </div>
  );
}

export default Foreground;
