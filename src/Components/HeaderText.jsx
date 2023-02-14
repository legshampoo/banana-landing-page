import { useEffect } from 'react'
import { 
  Center,
  Text3D,
  useMatcapTexture 
} from '@react-three/drei'
import * as THREE from 'three'

const material = new THREE.MeshMatcapMaterial()

export default function HeaderText() {

  console.log('headerText')
  const [matcapTexture] = useMatcapTexture('F77777_FBE1E1_FAB2B2_FBC4C4', 256)
  
  useEffect(() => {
    matcapTexture.encoding = THREE.sRGBEncoding
    matcapTexture.needsUpdate = true
    material.matcap = matcapTexture
    material.needsUpdate = true
  })

  return (
    <>
      <Center>
        <Text3D
          material={material}
          font='./fonts/helvetiker_regular.typeface.json'
          size={1}
          height={0.2}
          curveSegments={12}
          bevelEnabled={true}
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}>
          HELLO
        </Text3D>
      </Center>
    </>
  )
}