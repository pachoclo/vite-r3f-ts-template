import { useControls } from 'leva'

function Sphere() {
  const { color } = useControls('Sphere', {
    color: 'darkorange',
  })

  return (
    <mesh position={[-2, 0, 0]}>
      <sphereGeometry args={[1, 30, 30]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export { Sphere }
