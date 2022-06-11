import styles from '../styles/Home.module.css';
import Link from "next/link";
import { useState } from 'react';

import client from '../lib/sanityConfig/client';

import { motion } from 'framer-motion';
import { container, content } from '../lib/motion/variants';

export default function Home() {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [hasSubmitted, setHasSubmitted] = useState(false)

	const onSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true)
		// Login logic
	}

	if (hasSubmitted)
		return (
			<motion.div className='form-box' style={{ paddingTop: '25%' }} initial='initial' animate='enter' exit='exit' variants={container}>
				<motion.h3 variants={content} style={{ textAlign: 'center' }}>Thank you for your submission! You can check your email to confirm your information. <br /> We&apos;ll get back to you as soon as possible.</motion.h3>
				<motion.div variants={content} className='group row justify-content-center'>
					<Link href='/'><a>Go back to the homepage &rarr;</a></Link>

				</motion.div>
			</motion.div>
		)

	return (
		<motion.div variants={container} initial='initial' animate='enter' exit='exit' >
			<div className={styles.main}>
				<form onSubmit={onSubmit} className="form-box">
					<motion.h1 variants={content}>Login to Bloodline</motion.h1>
					<div className="row justify-content-center">
						<div className="col-md-7">
							<motion.div variants={content} className="group">
								<label>Email*</label>
								<input name='email' type='text' required value={email} onChange={e => setEmail(e.target.value)} />
							</motion.div>
                            <motion.div variants={content} className="group">
								<label>Password*</label>
								<input name='password' type='text' required value={password} onChange={e => setPassword(e.target.value)} />
							</motion.div>
							<motion.div variants={content}>
								{isSubmitting && (
									<input type="submit" className="button" value="Saving..." disabled />
								) || (
										<input type="submit" className="button" value="Save" />
									)}

							</motion.div>
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
