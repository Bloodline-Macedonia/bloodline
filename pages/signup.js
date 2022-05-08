import Background from '../components/background/Background';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Navigation from "../components/navigation/Navigation.js";
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { motion } from 'framer-motion';
import { container, content } from '../lib/motion/variants';

export default function Home() {
	const [formData, setFormData] = useState()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [hasSubmitted, setHasSubmitted] = useState(false)
	const { register, handleSubmit, watch, formState: { errors } } = useForm()
	const onSubmit = async data => {
		setIsSubmitting(true)
		let response
		setFormData(data)
		try {
			response = await fetch('/api/signup', {
				method: 'POST',
				body: JSON.stringify(data),
				type: 'application/json'
			})
			setIsSubmitting(false)
			setHasSubmitted(true)
		} catch (err) {
			setFormData(err)
		}
	}

	if (hasSubmitted)
		return (
			<motion.div className='form-box' style={{paddingTop: '25%'}} initial='initial' animate='enter' exit='exit' variants={container}>
				<motion.h3 variants={content} style={{ textAlign: 'center' }}>Thank you for your submission! <br /> We&apos;ll get back to you as soon as possible.</motion.h3>
				<motion.div variants={content} className='group row justify-content-center'>
					<Link href='/'><a>Go back to the homepage &rarr;</a></Link>

				</motion.div>
			</motion.div>
		)

	let date = new Date();
	date.setFullYear(date.getFullYear() - 18);
	let dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
	return (
		<motion.div variants={container} initial='initial' animate='enter' exit='exit' >
			<div className={styles.main}>
				<form onSubmit={handleSubmit(onSubmit)} className="form-box">
					<motion.h1 variants={content}>Sign up for Bloodline</motion.h1>
					<div className="row justify-content-center">
						<div className="col-md-7">
							<motion.div variants={content} className="group">
								<label>Full Name*</label>
								{hasSubmitted && (
									<input type='text' required value={formData.name} name='name' />
								) || (
										<input type='text' required name='name' />
									)}
							</motion.div>
							<motion.div variants={content} className="group">
								<label>Birthdate*</label>
								<input type='date' required max={dateString} />
							</motion.div>
							<motion.div variants={content} className="group">
								<label>Blood Type*</label>
								<select>
									<option>A+</option>
									<option>A-</option>
									<option>B+</option>
									<option>B-</option>
									<option>AB+</option>
									<option>AB-</option>
									<option>0+</option>
									<option>0-</option>
								</select>

							</motion.div>
							<motion.div variants={content} className="group">
								<label>Phone Number*</label>
								<input type='text' required />
							</motion.div>
							<motion.div variants={content} className="group">
								<label>Email*</label>
								<input type='text' required />
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
