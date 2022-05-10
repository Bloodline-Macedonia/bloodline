import styles from '../styles/Home.module.css';
import Link from "next/link";
import { useState } from 'react';

import client from '../lib/sanityConfig/client';

import { motion } from 'framer-motion';
import { container, content } from '../lib/motion/variants';

export default function Home() {
	const [name, setName] = useState('');
	const [birthDate, setBirthDate] = useState('');
	const [bloodType, setBloodType] = useState('A+');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [hasSubmitted, setHasSubmitted] = useState(false)
	// const sendmail = async () => {
	// 	try {

	// 	}
	// 	catch (error) {
	// 		setIsSubmitting(false);
	// 		return (
	// 			<motion.div className='form-box' style={{ paddingTop: '25%' }} initial='initial' animate='enter' exit='exit' variants={container}>
	// 				<motion.h3 variants={content} style={{ textAlign: 'center', color: 'darkred' }}>There was a problem while saving your information, please try again later.</motion.h3>
	// 				<motion.div variants={content} className='group row justify-content-center'>
	// 					<Link href='/'><a>Go back to the homepage &rarr;</a></Link>
	// 				</motion.div>
	// 			</motion.div>
	// 		)
	// 	}
	// }

	const mail = async (e) => {
		try {
			await fetch("/api/sendmail", {
				"method": "POST",
				"headers": { "content-type": "application/json" },
				"body": JSON.stringify({
					"name": name,
					"birthDate": birthDate,
					"bloodType": bloodType,
					"phone": phone,
					"email": email,
				})
			})
		}
		catch (error) {
			console.log('couldnt send mail: %e', error)
		}
		
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true)
		client.create({
			_type: 'user',
			name,
			birthDate,
			bloodType,
			email,
			phone
		}).then(async (res) => {
			console.log(res);
			mail();
			setHasSubmitted(true);
		}).catch((err) => {
			console.log(err);
			return (
				<motion.div className='form-box' style={{ paddingTop: '25%' }} initial='initial' animate='enter' exit='exit' variants={container}>
					<motion.h3 variants={content} style={{ textAlign: 'center', color: 'darkred' }}>There was a problem while saving your information, please try again later.</motion.h3>
					<motion.div variants={content} className='group row justify-content-center'>
						<Link href='/'><a>Go back to the homepage &rarr;</a></Link>
					</motion.div>
				</motion.div>
			)
		})
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

	let date = new Date();
	date.setFullYear(date.getFullYear() - 18);
	let dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
	return (
		<motion.div variants={container} initial='initial' animate='enter' exit='exit' >
			<div className={styles.main}>
				<form onSubmit={onSubmit} className="form-box">
					<motion.h1 variants={content}>Sign up for Bloodline</motion.h1>
					<div className="row justify-content-center">
						<div className="col-md-7">
							<motion.div variants={content} className="group">
								<label>Full Name*</label>
								<input type='text' required name='name' value={name} onChange={e => setName(e.target.value)} />
							</motion.div>
							<motion.div variants={content} className="group">
								<label>Birthdate*</label>
								<input type='date' name='birthDate' required max={dateString} value={birthDate} onChange={e => setBirthDate(e.target.value)} />
							</motion.div>
							<motion.div variants={content} className="group">
								<label>Blood Type*</label>
								<select name='bloodType' value={bloodType} onChange={e => setBloodType(e.target.value)}>
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
								<input name='phone' type='text' required value={phone} onChange={e => setPhone(e.target.value)} />
							</motion.div>
							<motion.div variants={content} className="group">
								<label>Email*</label>
								<input name='email' type='text' required value={email} onChange={e => setEmail(e.target.value)} />
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
