import { LogoIcon } from "@/components/icons";
import Link from "@/components/Link/Link";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<span className={styles.headerSlot}>
				<LogoIcon className={styles.logo} />
				<span className={styles.name}>Alexia Villiez</span>
			</span>
			<nav className={styles.nav}>
				<Link href="#projets">Projets</Link>
				<Link href="#contact">Contact</Link>
			</nav>
		</header>
	);
};

export default Header;
