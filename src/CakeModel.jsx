import React, {useRef} from 'react'
import { useGLTF,Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const CakeModel = () => {
    const img = useGLTF("birthday_cake.glb")
    const boxRef = useRef();

    let deltaY = .01;
  

    useFrame((state,delta)=>{

        boxRef.current.rotation.y += .01;
        boxRef.current.position.y += deltaY;
        if(boxRef.current.position.y > -1 || boxRef.current.position.y < -2.25){
            deltaY *= -1;
        }
        // console.log(boxRef.current.position.y)
    })
  return (
      <group>
      <group ref={boxRef} position={[0,-2,0]} scale={.012}>
    <primitive object={img.scene}/>
    </group>
    <directionalLight position={[2,3,2]}/>

    </group>
  )
}

export default CakeModel