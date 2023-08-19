import { useState, useRef } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import './App.css'
import { ScrollControls,Text, Text3D } from '@react-three/drei'
import Experience from "./Experience"




const Birth = ()=>{
  const textRef = useRef();

  let deltaY = .005;

  useFrame(()=>{

    textRef.current.rotation.y += deltaY;
    if(Math.abs(textRef.current.rotation.y) > .18)deltaY *= -1;
  })


  return (
    <Text ref={textRef} height={.2} size={1} position={[0,2.5,0]}>
    BIRTH
 </Text>
  )
}
function App() {

  return (
    <div className="app">
     <Canvas>
       <color attach="background" args={["black"]}/>
       {/* <ambientLight intensity={1}/> */}
     <Birth/>
       <ScrollControls pages={3}>
         <Experience/>
       </ScrollControls>
     </Canvas>
    </div>
  )
}

export default App
