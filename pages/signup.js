import Background from '../components/background/Background';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Navigation from "../components/navigation/Navigation.js";
import { useEffect, useRef } from 'react';

export default function Home() {
	const container = useRef(null)

	return (
		<div className='container'>
			<div className={styles.main}>
				<h1>Sign up for Bloodline</h1>
				<form action="" method="POST" className="form-box">
					<div className="row justify-content-center">
						<div className="col-md-7">
							<div className="group">
								<label>Full Name*</label>
								<input type='text' />
							</div>
							<div className="group">
								<label>Birthdate*</label>
								<input type='text' />
							</div>
							<div className="group">
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

							</div>
							<div>
								<a href="#" className="button" value="Save" >Save</a>
							</div>
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

		</div>
	);
}
