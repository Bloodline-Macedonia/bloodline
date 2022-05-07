import styles from "./Navigation.module.css";
import Link from 'next/link';


const Navigation = () => {
	return <div className={styles.container}>
		<nav className={styles.nav}>
			<Link href={'/'}><a> About Us </a></Link>
		</nav>
	</div>;
};

export default Navigation;
