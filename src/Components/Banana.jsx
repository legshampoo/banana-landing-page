import {
  useGLTF
} from '@react-three/drei'

export default function Banana({ innerRef, position, rotation }) {
  const { nodes, materials } = useGLTF('/models/banana-v1-transformed.glb')

  return (
    <>
      <mesh
        ref={innerRef}
        geometry={nodes.banana.geometry}
        material={materials.skin}
        material-emissive='#ffee2e'
        position={position}
        rotation={rotation}
      />
    </>
  )
}