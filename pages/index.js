import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/navigation/Navigation.js";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Navigation />
			<div className={styles.slidesContainer}>
				<div className={styles.slide} id="about"></div>
				<div className={styles.slide} id="sign up"></div>
				<div className={styles.slide} id="download"></div>
				<div className={styles.slide} id="contact"></div>
				
			</div>
		</div>
	);
}
