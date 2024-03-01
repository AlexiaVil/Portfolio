import styles from "./Link.module.css";

const Link = ({
	className,
	...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
	return (
		<a
			className={[styles.link, className].join(" ")}
			rel="noopener noreferrer"
			{...props}
		/>
	);
};

export default Link;
