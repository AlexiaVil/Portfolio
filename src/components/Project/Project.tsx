import Image from "next/image";
import styles from "./Project.module.css";
import Heading from "../Heading/Heading";
import Link from "next/link";
import { ProjectData } from "@/data/projects";

export type ProjectFormat = "landscape" | "portrait";
export type Alignment = "left" | "right";

export interface ProjectProps extends ProjectData {
	align: Alignment;
	format: ProjectFormat;
}

const Project = ({
	year,
	title: longTitle,
	url,
	list,
	format,
	align,
}: ProjectProps) => {
	const { title, description, media } = list;
	const getImageLink = (image: string) => `${process.env.basePath}${image}`;

	return (
		<Link
			href={url}
			className={[styles.project, align === "right" ? styles.right : ""].join(
				" ",
			)}
		>
			{media.type === "video" ? (
				<video
					className={[
						styles.video,
						format === "portrait" ? styles.portrait : styles.landscape,
					].join(" ")}
					autoPlay
					loop
					muted
					playsInline
				>
					{(media.src as Array<string>).map((src: string) => (
						<source
							key={src}
							src={getImageLink(src)}
							type={`video/${src.split(".")[1]}`}
						/>
					))}
				</video>
			) : (
				<span
					className={[
						styles.imageContainer,
						format === "portrait" ? styles.portrait : styles.landscape,
					].join(" ")}
				>
					<Image
						src={getImageLink(media.src as string)}
						alt={media.alt}
						fill={true}
						className={styles.image}
					/>
				</span>
			)}
			<Heading variant="h4" className={styles.subtitle}>
				{year} - {longTitle}
			</Heading>
			<span className={styles.link}>{title}</span>
			<span className={styles.description}>{description}</span>
		</Link>
	);
};

export default Project;
