import { PivotControls } from '@react-three/drei'
import { useControls } from 'leva'
import { useRef } from 'react'
import { BufferGeometry, Group, Mesh, MeshStandardMaterial } from 'three'

function Sphere() {
  const sphereRef = useRef<Mesh<BufferGeometry, MeshStandardMaterial>>(null)
  const pivotRef = useRef<Group>(null)

  const { position, color, gizmo } = useControls('Sphere', {
    position: [-2, 0, 0],
    color: 'darkorange',
    gizmo: false,
  })

  return (
    <PivotControls anchor={[0, 0, 0]} depthTest={false} visible={gizmo} ref={pivotRef}>
      <mesh position={position} ref={sphereRef} castShadow>
        <sphereGeometry args={[1, 30, 30]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </PivotControls>
  )
}

export { Sphere }
