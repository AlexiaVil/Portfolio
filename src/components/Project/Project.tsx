import Image from "next/image";
import styles from "./Project.module.css";
import Heading from "../Heading/Heading";
import Link from "next/link";

export type ProjectFormat = "landscape" | "portrait";
export type Alignment = "left" | "right";

export interface ProjectProps {
	format: ProjectFormat;
	align: Alignment;
	url: string;
	title: string;
	subtitle: string;
	description: string;
	image: string;
}

const Project = ({
	format,
	title,
	subtitle,
	description,
	image,
	align,
	url,
}: ProjectProps) => {
	return (
		<div
			className={[styles.project, align === "right" ? styles.right : ""].join(
				" ",
			)}
		>
			<div
				className={[
					styles.imageContainer,
					format === "portrait" ? styles.portrait : styles.landscape,
				].join(" ")}
			>
				<Image src={image} alt={title} fill={true} className={styles.image} />
			</div>
			<Heading variant="h4" className={styles.subtitle}>
				{subtitle}
			</Heading>
			<Link href={url} className={styles.link}>
				{title}
			</Link>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default Project;
