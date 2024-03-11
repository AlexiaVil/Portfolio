"use client";

import Link from "@/components/Link/Link";
import styles from "./Nav.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { animate } from "framer-motion";

const Nav = () => {
	const pathname = usePathname();
	const [destination, setDestination] = useState(0);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		if (destination === 0) return;
		if (scrolling) return;

		animate(window.scrollY, destination, {
			ease: [0.16, 1, 0.3, 1],
			duration: 0.5,
			onUpdate: (value) => {
				window.scrollTo(0, value);
			},
			onComplete: () => {
				setDestination(0);
				setScrolling(false);
			},
		});

		setScrolling(true);
	}, [destination, scrolling]);

	const isHome = pathname === "/";
	const getLink = (href: string) => {
		return isHome ? href : `${process.env.basePath}/${href}`;
	};

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (!isHome || scrolling) return;

		e.preventDefault();

		const target = e.currentTarget.getAttribute("data-target");
		if (!target) return;

		const targetElement = Array.from(
			document
				.querySelectorAll<HTMLElement>(`section[data-section=${target}]`)
				.values(),
		).filter((e) => window.getComputedStyle(e).display !== "none")[0];
		if (!targetElement) return;

		const body = document.querySelector("body");
		if (!body) return;

		const html = document.querySelector("html");
		if (!html) return;

		const height =
			Math.max(
				body.scrollHeight,
				body.offsetHeight,
				html.clientHeight,
				html.scrollHeight,
				html.offsetHeight,
			) - window.innerHeight;

		const offset =
			targetElement.getBoundingClientRect().top -
			body.offsetTop +
			window.scrollY -
			130;

		setDestination(Math.min(offset, height));
		if (location.hash === `#${target}`) return;
		history.replaceState(null, "", `#${target}`);
	};

	return (
		<nav className={styles.nav}>
			<Link
				href={getLink("#projects")}
				onClick={handleLinkClick}
				data-target="projects"
			>
				Projets
			</Link>
			<Link
				href={getLink("#contact")}
				onClick={handleLinkClick}
				data-target="contact"
			>
				Contact
			</Link>
		</nav>
	);
};

export default Nav;
