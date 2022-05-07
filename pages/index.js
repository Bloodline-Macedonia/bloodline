import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation/Navigation.js";
import styles from "../styles/Home.module.css";
import { useEffect, useRef } from 'react';
import createScrollSnap from 'scroll-snap';

export default function Home() {
  const container = useRef(null)

  function bindScrollSnap() {
    const element = container.current
    createScrollSnap(element, {
      snapDestinationY: '100%',
    } )
  }
  useEffect(() => {
		  bindScrollSnap()
  }, [])

	return (
		<div>
			<Navigation />
			<div ref={container} className={styles.slidesContainer}>
				<div className={styles.slide} id="about"></div>
				<div className={styles.slide} id="sign up"></div>
				<div className={styles.slide} id="download"></div>
				<div className={styles.slide} id="contact"></div>
				
			</div>
		</div>
	);
}
