import Image from "next/image";
import { ProjectData, ProjectScreenshot, projects } from "@/data/projects";
import sizeOf from "image-size";
import styles from "./ProjectPage.module.css";
import Heading from "@/components/Heading/Heading";
import Tag from "@/components/Tag/Tag";
import Button from "@/components/Button/Button";
import { join } from "path";

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

	const previousProject = projects.find(
		(p) => p.index === projectData.index - 1,
	)?.url;
	const nextProject = projects.find(
		(p) => p.index === projectData.index + 1,
	)?.url;

	const Hero = ({ className }: { className: string }) => (
		<div className={[styles.hero, className].join(" ")}>
			{projectData.hero.map((media, i) => {
				if (media.type === "image") {
					return (
						<div key={`${media.src}${i}`} className={styles.imageContainer}>
							<Image
								alt={projectData.title}
								fill
								className={styles.image}
								src={getImageLink(media.src as string)}
							/>
						</div>
					);
				} else {
					return (
						<div key={`${media.src[0]}${i}`} className={styles.imageContainer}>
							<video
								className={styles.screenshotVideo}
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
						</div>
					);
				}
			})}
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
					{projectData.collab && (
						<span className={styles.collab}>
							en collaboration avec {projectData.collab}
						</span>
					)}
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
	screenshot: ProjectScreenshot | undefined,
	side: "left" | "right",
) {
	const getImageLink = (image: string) => `${process.env.basePath}${image}`;
	const sideClass =
		side === "left" ? styles.screenshotLeft : styles.screenshotRight;

	if (!screenshot) {
		return <div className={sideClass} />;
	}

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
				{screenshot.description?.title && (
					<span className={styles.screenshotTitle}>
						{screenshot.description?.title}
					</span>
				)}
				{screenshot.description?.text && (
					<p className={styles.screenshotDescription}>
						{screenshot.description?.text}
					</p>
				)}
			</div>
		);
	}
}

export async function generateStaticParams() {
	return projects.map((project) => ({
		project: project.url,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { project: string };
}) {
	const project = projects.find((p) => p.url === params.project);

	if (!project) {
		return {};
	}

	const title = `${project.title} - Alexia Villiez`;
	const description = project.list.description;
	const url = `https://villiezalexia.fr/${process.env.basePath !== "" ? `${process.env.basePath}/` : ""}${project.url}`;

	let size;
	let imageUrl;

	if (project.hero[0]?.type === "image") {
		size = getImageSize(project.hero[0].src as string);
		imageUrl = project.hero[0].src as string;
	}

	if (project.hero[1]?.type === "image" && size === undefined) {
		size = getImageSize(project.hero[1].src as string);
		imageUrl = project.hero[1].src as string;
	}

	if (size === undefined) {
		project.screenshots.some((screenshot) => {
			if (screenshot.left?.media?.type === "image") {
				size = getImageSize(screenshot.left.media.src as string);
				imageUrl = screenshot.left.media.src as string;
				return true;
			} else if (screenshot.right?.media?.type === "image") {
				size = getImageSize(screenshot.right.media.src as string);
				imageUrl = screenshot.right.media.src as string;
				return true;
			}

			return false;
		});
	}

	if (size === undefined || imageUrl === undefined) {
		console.error("No image found for project", project.url);
		return {};
	}

	const { width, height } = size;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			url,
			type: "website",
			siteName: "Alexia Villiez - UI Designer",
			images: [
				{
					url: imageUrl,
					width,
					height,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [
				{
					url: imageUrl,
					width,
					height,
				},
			],
		},
	};
}

function getImageSize(image: string) {
	const path = join(process.cwd(), "public", image);
	const { width, height } = sizeOf(path);
	return { width, height };
}
