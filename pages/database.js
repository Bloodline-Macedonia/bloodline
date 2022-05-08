import Background from '../components/background/Background';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Navigation from "../components/navigation/Navigation.js";
import { useEffect, useRef } from 'react';

export default function Home() {
	const container = useRef(null)

	return (
		<div className='container'>
			<Navigation />
			<div className={styles.main}>
				<div className={styles.backgroundContainer}>
					<Background />
				</div>
				<div className={`${styles.landingmessage} noisy`}>
					{/* <div className={styles.imageContainer}>
					<img src='/Logo_2.png' />
				</div> */}
					<h1>one drop from you, <br /> an ocean for someone in need. </h1>
					<Link href='/about'><a className='button'>Help us save lives &rarr;</a></Link>
				</div>
			</div>
			<div className='footer'>
				<div className='links'>
					<a href='mailto:bloodlinemacedonia@gmail.com'>Email Us</a>
				</div>
				<p> With <span style={{color: '#DA3237'}}>&hearts;</span> from Bloodline Team </p>
			</div>

		</div>
	);
}
