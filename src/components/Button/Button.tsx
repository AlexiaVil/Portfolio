import { ArrowNextIcon, ArrowPrevIcon } from "../icons";
import styles from "./Button.module.css";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	arrow?: "left" | "right" | "both";
	disabled?: boolean;
}

const Button = ({
	children,
	className,
	arrow,
	disabled,
	...props
}: ButtonProps) => {
	return (
		<a
			className={[
				styles.button,
				disabled ? styles.disabled : "",
				className,
			].join(" ")}
			{...props}
		>
			{arrow && ["left", "both"].includes(arrow) && (
				<ArrowPrevIcon className={styles.arrow} />
			)}
			<span className={styles.text}>{children}</span>
			{arrow && ["right", "both"].includes(arrow) && (
				<ArrowNextIcon className={styles.arrow} />
			)}
		</a>
	);
};

export default Button;
