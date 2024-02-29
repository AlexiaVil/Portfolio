import styles from "./Tag.module.css";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {}

const Tag = ({ children, className, ...props }: Props) => {
	return (
		<div className={[styles.tag, className].join(" ")} {...props}>
			<span className={styles.adjust}>{children}</span>
		</div>
	);
};

export default Tag;
