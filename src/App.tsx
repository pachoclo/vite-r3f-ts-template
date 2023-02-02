import { Canvas } from '@react-three/fiber'
import './styles.css'

function App() {
  return (
    <div className='app'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='red' position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
