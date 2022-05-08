import Background from '../components/background/Background';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { motion } from 'framer-motion';
import Navigation from "../components/navigation/Navigation.js";
import { useEffect, useRef } from 'react';

import { container, content } from '../lib/motion/variants';


export default function Home() {

	return (
		<motion.div initial='initial' animate='enter' exit='exit'>
			<div className={styles.main}>
				<motion.div variants={content}  className={styles.backgroundContainer}>
					<Background />
				</motion.div>
				<motion.div variants={content}  className={`${styles.landingmessage} noisy`}>
					{/* <div className={styles.imageContainer}>
					<img src='/Logo_2.png' />
				</div> */}
					<h1>One <span style={{fontWeight: '600', color: 'darkred'}}>drop</span> from you, <br /> an <span style={{fontWeight: '600', color: '#0a7e8c'}}>ocean</span> for someone in need. </h1>
					<Link href='/signup'><a className='button'>Help us save lives &rarr;</a></Link>
				</motion.div>
			</div>
			<div className='footer'>
				<div className='links'>
					<a href='mailto:bloodlinemacedonia@gmail.com'>Email Us</a>
				</div>
				<p> With <span style={{ color: '#DA3237' }}>&hearts;</span> from Bloodline Team </p>
			</div>

		</motion.div>
	);
}
