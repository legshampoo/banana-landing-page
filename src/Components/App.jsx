import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import Landing from './Landing'

export default function App() {

  const cameraSettings = {
    fov: 45,
    zoom: 1, 
    near: 0.1,
    far: 1000,
    position: [0, 0, 10]
  }

  return (
    <div className='app'>
      <Landing />
      <Canvas 
        camera={cameraSettings}>
        <Scene />
      </Canvas>
    </div>
  )
}


