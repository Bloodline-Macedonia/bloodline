import Head from 'next/head'
import Image from 'next/image'
import Background from '../components/background/Background'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Background />
    </div>
  )
}
