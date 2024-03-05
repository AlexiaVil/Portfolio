import Image from "next/image";
import { ProjectData, projects } from "@/data/projects";
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
			{projectData.hero.map((image) => (
				<div key={image} className={styles.imageContainer}>
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
					const left = screenshot.left.image ? (
						<div
							className={[styles.screenshotImage, styles.screenshotLeft].join(
								" ",
							)}
						>
							<Image
								src={getImageLink(screenshot.left.image)}
								fill
								className={styles.image}
								alt={""}
							/>
						</div>
					) : (
						<div
							className={[styles.screenshotText, styles.screenshotLeft].join(
								" ",
							)}
						>
							<span className={styles.screenshotTitle}>
								{screenshot.left.description?.title}
							</span>
							<p className={styles.screenshotDescription}>
								{screenshot.left.description?.text}
							</p>
						</div>
					);

					const right = screenshot.right.image ? (
						<div
							className={[styles.screenshotImage, styles.screenshotRight].join(
								" ",
							)}
						>
							<Image
								src={getImageLink(screenshot.right.image)}
								fill
								className={styles.image}
								alt={""}
							/>
						</div>
					) : (
						<div
							className={[styles.screenshotText, styles.screenshotRight].join(
								" ",
							)}
						>
							<span className={styles.screenshotTitle}>
								{screenshot.right.description?.title}
							</span>
							<p className={styles.screenshotDescription}>
								{screenshot.right.description?.text}
							</p>
						</div>
					);

					return (
						<div
							key={i}
							className={[
								styles.screenshotContainer,
								i % 2 !== 0 ? styles.reverse : "",
							].join(" ")}
						>
							{left}
							{right}
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

export async function generateStaticParams() {
	return projects.map((project) => ({
		project: project.url,
	}));
}
