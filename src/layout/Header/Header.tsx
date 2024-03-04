import { LogoIcon } from "@/components/icons";
import styles from "./Header.module.css";
import Nav from "./Nav/Nav";

const Header = () => {
	return (
		<header className={styles.header}>
			<span className={styles.headerSlot}>
				<LogoIcon className={styles.logo} />
				<span className={styles.name}>Alexia Villiez</span>
			</span>
			<Nav />
		</header>
	);
};

export default Header;
