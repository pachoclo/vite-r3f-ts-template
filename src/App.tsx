import { Canvas } from '@react-three/fiber'
import { Leva, useControls } from 'leva'
import { ACESFilmicToneMapping, sRGBEncoding } from 'three'
import { Scene } from './components/Scene'
import './styles.css'

function App() {
  return (
    <div className='app'>
      <Leva
        collapsed={false}
        oneLineLabels={false}
        flat={true}
        theme={{
          sizes: {
            titleBarHeight: '28px',
          },
          fontSizes: {
            root: '10px',
          },
        }}
      />
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
          position: [3, 2, 9],
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

export default App
