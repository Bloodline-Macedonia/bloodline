import styles from './Background.module.css'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
// import model from './Cell.gltf'

const Cell = (props) => {
    
    const ref = useRef()
    // const { nodes, materials } = useGLTF(model)

    useFrame(() => {
      ref.current.rotation.x += 0.005
      ref.current.rotation.y += 0.005
    //   ref.current.position.x -= 0.05
    })

    return (
      <mesh
        {...props}
        ref={ref}
        position={props.position}
      >
        <torusGeometry args={[5, 3, 50, 20]} />
        <meshStandardMaterial color={props.color} wireframe/>
      </mesh>
    )
  }

const Background = () => {
    return (
        <Canvas camera={{position: [0, 0, 20]}} className={styles.canvas}>
            <ambientLight />
            <Cell color="red" position={[20, 0, 0]} />
        </Canvas>
    )
}

export default Background