import { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/background";
import Foreground from "./components/Foreground";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(()=>{
    const mouseMove = (e)=> {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove)
    return ()=> {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x-16,
      y: mousePosition.y-16
    }
  }

  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
      <motion.div className="cursor" variants={variants} animate="default"/>
    </div>
  );
}

export default App;
