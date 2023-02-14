import { 
  OrbitControls,
  Environment,
  Html 
} from '@react-three/drei'
import { EffectComposer, DepthOfField} from '@react-three/postprocessing'
import { Perf } from 'r3f-perf'
import Box from './Box'
import HeaderText from './HeaderText'
import Bananas from './Bananas'
import Landing from './Landing'

export default function Scene() {
  console.log('Scene Render')

  const bounds = {
    x: 50,
    y: 50,
    z: 50
  }

  return (
    <>
      {/* <Perf position='top-left' /> */}
      <color attach='background' args={['#FF1D3A']} />
      <ambientLight intensity={1} />
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <OrbitControls 
        makeDefault  
        autoRotate={true}
        autoRotateSpeed={.5}
        enableZoom={true}
        maxDistance={80}
        minAzimuthAngle={-Infinity}
        maxAzimuthAngle={Infinity}/>
      <Bananas 
        count={100}
        speed={1}
        bounds={bounds}
      />
      <EffectComposer>
        <DepthOfField target={[0, 0, 10]} focalLength={.1} bokehScale={11} height={700} />
      </EffectComposer>
    </>
  )
}