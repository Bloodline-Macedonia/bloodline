import styles from './Background.module.css'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ShapeGeometry } from 'three'

const Cell = (props) => {

  const ref = useRef()
  // const { nodes, materials } = useGLTF(model)

  useFrame(() => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
    // ref.current.position.x -= 0.05
  })

  return (
    <mesh
      {...props}
      ref={ref}
      position={props.position}
    >
      <torusGeometry args={[5, 3, 200, 50]} />
      <meshStandardMaterial roughness={1} color={props.color} depthFunc />
    </mesh>
  )
}

const Background = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} shadowMap className={styles.canvas}>
      <directionalLight
        intensity={1}
        color="darkred"
        position={[10, 5, 10]}
        castShadow
        shadow-mapSize-height={218}
        shadow-mapSize-width={218}
      />
      <Cell color="red" position={[0, 0, 0]} />
    </Canvas>
  )
}

export default Background