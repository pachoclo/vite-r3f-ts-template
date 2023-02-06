function Plane() {
  return (
    <mesh
      rotation-x={-Math.PI / 2}
      position={[0, -1, 0]}
      scale={[10, 10, 10]}
      receiveShadow
    >
      <planeGeometry />
      <meshStandardMaterial color='greenyellow' />
    </mesh>
  )
}

export { Plane }
