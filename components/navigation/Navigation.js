import styles from "./Navigation.module.css";
import Link from 'next/link';


const Navigation = () => {
	function handleScroll(e, id) {
		e.preventDefault()
		const element = document.getElementById(id)
		element && element.scrollIntoView({ behavior: "smooth" })
		console.log(element)

	}
	return <div className={styles.container}>
		<nav className={styles.nav}>
			<Link href={'/'}><a href="/" onClick={(e) => handleScroll(e, 'about')}
			> About Us </a></Link>
		</nav>
	</div>;
};

export default Navigation;
