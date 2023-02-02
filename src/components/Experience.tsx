function Experience() {
  return (
    <>
      <mesh position-x={1.5}>
        <sphereGeometry args={[1, 30, 30]} />
        <meshBasicMaterial color={'mediumpurple'} wireframe />
      </mesh>
    </>
  )
}

export { Experience }
