import { LogoIcon } from "@/components/icons";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<span className={styles.headerSlot}>
				<LogoIcon className={styles.logo} />
				<span className={styles.name}>Alexia Villiez</span>
			</span>
			<nav className={styles.nav}>
				<a href="#projets" className={styles.link}>
					Projets
				</a>
				<a href="#contact" className={styles.link}>
					Contact
				</a>
			</nav>
		</header>
	);
};

export default Header;
