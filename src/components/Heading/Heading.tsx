import styles from "./Heading.module.css";

interface HeadingProps {
	children: React.ReactNode;
	variant?: "h1" | "h2" | "h3" | "h4";
	asHeader?: boolean;
}

const Heading = ({
	children,
	asHeader = false,
	variant = "h1",
}: HeadingProps) => {
	const Component = (
		asHeader ? variant : "span"
	) as keyof JSX.IntrinsicElements;

	return (
		<Component className={[styles.heading, styles[variant]].join(" ")}>
			{children}
		</Component>
	);
};

export default Heading;
