import { useState, useRef } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import './App.css'
import { ScrollControls,Text, Text3D } from '@react-three/drei'
import Experience from "./Experience"
import "../node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json"




const Birth = ()=>{
  const textRef = useRef();

  let deltaY = .005;

  useFrame(()=>{

    textRef.current.rotation.y += deltaY;
    if(Math.abs(textRef.current.rotation.y) > .18)deltaY *= -1;
  })


  return (
    <Text3D font={"../node_modules/three/examples/fonts/droid/droid_sans_bold.typeface.json"} ref={textRef} height={.2} size={1} position={[-2,2,0]}>
    BIRTH
 </Text3D>
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
