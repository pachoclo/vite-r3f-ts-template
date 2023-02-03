import { extend, useThree } from '@react-three/fiber'
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({
  OrbitControls: ThreeOrbitControls,
})

function OrbitControls() {
  const { camera, gl } = useThree()

  return (
    <>
      {/* @ts-ignore */}
      <orbitControls args={[camera, gl.domElement]} />
    </>
  )
}

export { OrbitControls }
