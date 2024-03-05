import Image from "next/image";
import { ProjectData, ProjectScreenshot, projects } from "@/data/projects";
import styles from "./ProjectPage.module.css";
import Heading from "@/components/Heading/Heading";
import Tag from "@/components/Tag/Tag";
import Button from "@/components/Button/Button";

export default function Page({
	params: { project },
}: {
	params: { project: string };
}) {
	const getImageLink = (image: string) => `${process.env.basePath}${image}`;
	const projectData: ProjectData | undefined = projects.find(
		(p) => p.url === project,
	);

	if (!projectData) {
		return <div>Project not found</div>;
	}

	const previousProject = projects[projectData.index - 1]?.url;
	const nextProject = projects[projectData.index + 1]?.url;

	const Hero = ({ className }: { className: string }) => (
		<div className={[styles.hero, className].join(" ")}>
			{projectData.hero.map((image, i) => (
				<div key={`${image}${i}`} className={styles.imageContainer}>
					<Image
						alt={projectData.title}
						fill
						className={styles.image}
						src={getImageLink(image)}
					/>
				</div>
			))}
		</div>
	);

	return (
		<div className={styles.page}>
			<Hero className={styles.d} />
			<div className={styles.content}>
				<div className={styles.meta}>
					<Heading variant="h4">{projectData.year}</Heading>
					<Heading variant="h2" asHeader className={styles.title}>
						{projectData.title}
					</Heading>
					<div className={styles.tags}>
						{projectData.tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
					<Heading variant="h3">{projectData.client}</Heading>
					<span className={styles.collab}>
						en collaboration avec {projectData.collab}
					</span>
				</div>
				<Hero className={styles.m} />
				<div className={styles.description}>
					{projectData.description.map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>
			</div>
			<div className={styles.gallery}>
				{projectData.screenshots.map((screenshot, i) => {
					return (
						<div
							key={i}
							className={[
								styles.screenshotContainer,
								i % 2 !== 0 ? styles.reverse : "",
							].join(" ")}
						>
							{generateScreenshotBlock(screenshot.left, "left")}
							{generateScreenshotBlock(screenshot.right, "right")}
						</div>
					);
				})}
			</div>
			<div className={styles.buttons}>
				<Button
					href={previousProject || "#"}
					disabled={previousProject === undefined}
					arrow="left"
				>
					Précédent
				</Button>
				<Button
					href={nextProject || "#"}
					disabled={nextProject === undefined}
					arrow="right"
				>
					Suivant
				</Button>
			</div>
		</div>
	);
}

function generateScreenshotBlock(
	screenshot: ProjectScreenshot,
	side: "left" | "right",
) {
	const getImageLink = (image: string) => `${process.env.basePath}${image}`;
	const sideClass =
		side === "left" ? styles.screenshotLeft : styles.screenshotRight;

	console.log(screenshot);
	if (screenshot.media) {
		if (screenshot.media.type === "image") {
			return (
				<div className={[styles.screenshotImage, sideClass].join(" ")}>
					<Image
						src={getImageLink(screenshot.media.src as string)}
						fill
						className={styles.image}
						alt={screenshot.media.alt}
					/>
				</div>
			);
		} else {
			return (
				<video
					className={[styles.screenshotVideo, sideClass].join(" ")}
					autoPlay
					loop
					muted
					playsInline
				>
					{(screenshot.media.src as Array<string>).map((src: string) => (
						<source
							key={src}
							src={getImageLink(src)}
							type={`video/${src.split(".")[1]}`}
						/>
					))}
				</video>
			);
		}
	} else {
		return (
			<div className={[styles.screenshotText, sideClass].join(" ")}>
				<span className={styles.screenshotTitle}>
					{screenshot.description?.title}
				</span>
				<p className={styles.screenshotDescription}>
					{screenshot.description?.text}
				</p>
			</div>
		);
	}
}

export async function generateStaticParams() {
	return projects.map((project) => ({
		project: project.url,
	}));
}
