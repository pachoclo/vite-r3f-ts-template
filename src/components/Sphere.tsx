function Sphere() {
  return (
    <mesh position={[-2, 0, 0]}>
      <sphereGeometry args={[1, 30, 30]} />
      <meshStandardMaterial color={'darkorange'} />
    </mesh>
  )
}

export { Sphere }
