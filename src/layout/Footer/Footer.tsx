"use client";

import { BehanceIcon, EnvelopeIcon, LinkedInIcon } from "@/components/icons";
import styles from "./Footer.module.css";
import Link from "@/components/Link/Link";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div />
			<div className={styles.links}>
				<Link
					href="https://www.linkedin.com/in/alexia-villiez-3ba112136"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedInIcon className={styles.icon} />
				</Link>
				<span className={styles.separator}>•</span>
				<Link
					href="mailto:alexvilliez@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<EnvelopeIcon className={styles.icon} />
				</Link>
				<span className={styles.separator}>•</span>
				<Link
					href="https://www.behance.net/alexvilliee70a"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BehanceIcon className={styles.icon} />
				</Link>
			</div>
			<span className={styles.copy}>
				<span className={styles.symbol}>&copy;</span> -{" "}
				{new Date().getUTCFullYear()}
			</span>
		</footer>
	);
};

export default Footer;
