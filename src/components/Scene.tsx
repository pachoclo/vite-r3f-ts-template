import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'
import { Cube } from './Cube'
import { OrbitControls } from './OrbitControls'
import { Plane } from './Plane'
import { Sphere } from './Sphere'

function Scene() {
  const cubeRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null)

  useFrame((_, delta) => {
    cubeRef.current!.rotation.y += delta / 3
  })

  return (
    <>
      <directionalLight position={[-2, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.2} />

      <Cube ref={cubeRef} />
      <Sphere />
      <Plane />

      <OrbitControls />
    </>
  )
}

export { Scene }
