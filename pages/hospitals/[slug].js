

import { motion } from 'framer-motion';
import { container, content } from '../../lib/motion/variants';

import styles from '../../styles/home.module.css';

export default function Home() {
	return (
		<motion.div variants={container} initial='initial' animate='enter' exit='exit' >
			<div className={styles.main}>
				<form onSubmit={onSubmit} className="form-box">
					<motion.h1 variants={content}>Sign up for Bloodline</motion.h1>
					<div className="row justify-content-center">
						<div className="col-md-7">
							
						</div>
					</div>
					<br />

				</form>
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
