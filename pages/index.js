import Background from '../components/background/Background';
import styles from '../styles/Home.module.css';
import Head from "next/head";
import Image from "next/image";
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
					<div className='row justify-content-center h-100'>
						<div className='col-md-6'>
							<h1>one drop from you, <br/> an ocean for someone in need. </h1>
						</div>
						<div className='col-md-6'>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
