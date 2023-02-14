import * as THREE from 'three'
import { 
  useRef,
  useEffect,
  useState
} from 'react'
import { 
  useFrame,
  useThree 
} from '@react-three/fiber'
import Banana from './Banana';
import { 
  OrbitControls 
} from '@react-three/drei'

export default function Bananas({ count, speed, bounds, viewport, camera }) {
  
  console.log('yep')

  const bananas = useRef([])

  useFrame((state, delta) => {
    for(const banana of bananas.current) { 
      banana.position.y += delta * speed

      banana.rotation.x += delta * 0.25
      banana.rotation.y += delta * 0.25
      banana.rotation.z += delta * 0.25

      if(banana.position.y > bounds.y){
        banana.position.y = -bounds.y
      }
    }
  })

  return (
    <>
      {[...Array(count)].map((value, index) => 
        <Banana 
          innerRef={(element) => bananas.current[index] = element}
          position={[
            (Math.random() - 0.5) * (2 * bounds.x),
            (Math.random() - 0.5) * (2 * bounds.y),
            (Math.random() - 0.5) * (2 * bounds.z)
          ]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
          ]}
          key={index}
        />
      )}
    </>
  )
}