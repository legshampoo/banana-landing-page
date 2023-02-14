

export default function Box() {
  return (
    <mesh>
      <boxGeometry scale={1} />
      <meshStandardMaterial color='mediumpurple' wireframe={ false } />
    </mesh>
  )
}