import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'
import { Cube } from './components/Cube'
import { Plane } from './components/Plane'
import { Sphere } from './components/Sphere'

function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })

  const { animate } = useControls('Cube', {
    animate: true,
  })

  const cubeRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null)

  useFrame((_, delta) => {
    if (animate) {
      cubeRef.current!.rotation.y += delta / 3
    }
  })

  return (
    <>
      {performance && <Perf position='top-left' />}

      <OrbitControls makeDefault />

      <directionalLight
        position={[-2, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024 * 2, 1024 * 2]}
      />
      <ambientLight intensity={0.2} />

      <Cube ref={cubeRef} />
      <Sphere />
      <Plane />
    </>
  )
}

export { Scene }
