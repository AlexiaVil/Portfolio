import { LogoIcon } from "@/components/icons";
import styles from "./Header.module.css";
import Nav from "./Nav/Nav";

const Header = () => {
	return (
		<header className={styles.header}>
			<a href={`${process.env.basePath}/`} className={styles.headerSlot}>
				<LogoIcon className={styles.logo} />
				<span className={styles.name}>Alexia Villiez</span>
			</a>
			<Nav />
		</header>
	);
};

export default Header;
