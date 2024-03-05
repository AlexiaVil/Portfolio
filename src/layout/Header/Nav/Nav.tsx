"use client";

import Link from "@/components/Link/Link";
import styles from "./Nav.module.css";
import { usePathname } from "next/navigation";

const Nav = () => {
	const pathname = usePathname();
	const isHome = pathname === `${process.env.basePath}/`;
	const getLink = (href: string) => {
		return isHome ? href : `${process.env.basePath}/${href}`;
	};

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (!isHome) return;

		e.preventDefault();

		const target = e.currentTarget.getAttribute("href");
		if (!target) return;

		const targetElement = document.querySelector(target);
		if (!targetElement) return;

		targetElement.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className={styles.nav}>
			<Link href={getLink("#projects")} onClick={handleLinkClick}>
				Projets
			</Link>
			<Link href={getLink("#contact")} onClick={handleLinkClick}>
				Contact
			</Link>
		</nav>
	);
};

export default Nav;
