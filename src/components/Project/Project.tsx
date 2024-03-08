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
		<div
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
				<div
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
				</div>
			)}
			<Heading variant="h4" className={styles.subtitle}>
				{year} - {longTitle}
			</Heading>
			<Link href={url} className={styles.link}>
				{title}
			</Link>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default Project;
