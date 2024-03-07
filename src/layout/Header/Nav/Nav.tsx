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
		console.log("effect running");
		if (destination === 0) return;
		if (scrolling) return;

		console.log("scrolling to", destination);
		console.log("scrollY", window.scrollY);
		const controls = animate(window.scrollY, destination, {
			ease: [0.16, 1, 0.3, 1],
			duration: 0.5,
			onUpdate: (value) => {
				console.log("  value", value);
				window.scrollTo(0, value);
			},
			onComplete: () => {
				console.log("scroll complete");
				setScrolling(false);
				setDestination(0);
			},
		});

		setScrolling(true);
		return () => {
			console.log("cleanup");
			controls.stop();
		};
	}, [destination]);

	const isHome = pathname === `${process.env.basePath}/`;
	const getLink = (href: string) => {
		console.log("isHome", isHome);
		console.log("  pathname", pathname);
		console.log("  basePath", process.env.basePath);
		console.log("  href", href);
		return isHome ? href : `${process.env.basePath}/${href}`;
	};

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		if (!isHome) return;

		e.preventDefault();

		const target = e.currentTarget.getAttribute("data-target");
		console.log("target", target);
		if (!target) return;

		const targetElement = Array.from(
			document
				.querySelectorAll<HTMLElement>(`section[data-section=${target}]`)
				.values(),
		).filter((e) => window.getComputedStyle(e).display !== "none")[0];
		console.log("targetElement", targetElement);
		if (!targetElement) return;

		const body = document.querySelector("body");
		console.log("body", body);
		if (!body) return;

		const html = document.querySelector("html");
		console.log("html", html);
		if (!html) return;

		const height =
			Math.max(
				body.scrollHeight,
				body.offsetHeight,
				html.clientHeight,
				html.scrollHeight,
				html.offsetHeight,
			) - window.innerHeight;

		console.log("height", height);
		const offset =
			targetElement.getBoundingClientRect().top -
			body.offsetTop +
			window.scrollY -
			130;

		console.log("offset", offset);
		setDestination(Math.min(offset, height));
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
