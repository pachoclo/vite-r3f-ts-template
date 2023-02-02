import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import './styles.css'

function App() {
  return (
    <div className='app'>
      <Canvas>
        <Experience />
      </Canvas>
    </div>
  )
}

export default App
