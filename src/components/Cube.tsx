import { forwardRef } from 'react'
import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three'

type CubeType = Mesh<BoxGeometry, MeshBasicMaterial>

const Cube = forwardRef<CubeType>((_, ref) => (
  <mesh ref={ref} position-x={2} castShadow>
    <boxGeometry args={[1.5, 1.5, 1.5]} />
    <meshStandardMaterial color={'mediumpurple'} />
  </mesh>
))

export { Cube }
