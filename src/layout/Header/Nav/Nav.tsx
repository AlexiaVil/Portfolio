"use client";

import Link from "@/components/Link/Link";
import styles from "./Nav.module.css";

const Nav = () => {
	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const target = e.currentTarget.getAttribute("href");
		if (!target) return;

		const targetElement = document.querySelector(target);
		if (!targetElement) return;

		targetElement.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className={styles.nav}>
			<Link href="#projects" onClick={handleLinkClick}>
				Projets
			</Link>
			<Link href="#contact" onClick={handleLinkClick}>
				Contact
			</Link>
		</nav>
	);
};

export default Nav;
