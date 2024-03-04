import styles from "./Heading.module.css";

interface HeadingProps {
	children: React.ReactNode;
	variant?: "h1" | "h2" | "h3" | "h4";
	asHeader?: boolean;
	className?: string;
}

const Heading = ({
	children,
	asHeader = false,
	className = "",
	variant = "h1",
}: HeadingProps) => {
	const Component = (
		asHeader ? variant : "span"
	) as keyof JSX.IntrinsicElements;

	return (
		<Component
			className={[styles.heading, styles[variant], className].join(" ")}
		>
			{children}
		</Component>
	);
};

export default Heading;
