import styles from "./Navigation.module.css";


const Navigation = () => {
	function handleScroll(e, id) {
			e.preventDefault()
			const element = document.getElementById(id)
			element && element.scrollIntoView({behavior: "smooth"})
			console.log(element)
            
	}
	return <div className={styles.container}>
			<nav className={styles.nav}>
					<a href="/" onClick={(e) => handleScroll(e,'about')}
					> About Us </a>
			</nav>
		   </div>;
};

export default Navigation;
