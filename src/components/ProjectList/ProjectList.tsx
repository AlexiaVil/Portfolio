import { ProjectData, projects } from "@/data/projects";
import Project from "../Project/Project";
import styles from "./ProjectList.module.css";

// Gotta jump through some hoops to make sure we can keep
// SSR working with the different project list layouts 🤠
//
// The two layouts render on the server, but the browser
// will only render the one that matches the media query

const DesktopProjectList = () => (
	<section
		className={[styles.projects, styles.projectsDesktop].join(" ")}
		data-section="projects"
	>
		<div className={styles.projectsLeft}>
			{projects
				.sort((a: ProjectData, b: ProjectData) => {
					return a.index - b.index;
				})
				.map((project: ProjectData, i: number) => {
					if (i % 2 === 0) {
						return (
							<Project
								key={project.title}
								align="right"
								format={project.list.format}
								{...project}
							/>
						);
					}

					return null;
				})}
		</div>
		<div className={styles.projectsRight}>
			{projects
				.sort((a: ProjectData, b: ProjectData) => {
					return a.index - b.index;
				})
				.map((project: ProjectData, i: number) => {
					if (i % 2 !== 0) {
						return (
							<Project
								key={project.title}
								align="left"
								format={project.list.format}
								{...project}
							/>
						);
					}

					return null;
				})}
		</div>
	</section>
);

const MobileProjectList = () => (
	<section
		className={[styles.projects, styles.projectsMobile].join(" ")}
		data-section="projects"
	>
		<div className={styles.projectsLeft}>
			{projects.map((project: ProjectData, i: number) => {
				return (
					<Project
						key={project.title}
						format={project.list.format}
						align={i % 2 === 0 ? "right" : "left"}
						{...project}
					/>
				);
			})}
		</div>
	</section>
);

export const ProjectList = () => {
	return (
		<>
			<DesktopProjectList />
			<MobileProjectList />
		</>
	);
};
