import Heading from "@/components/Heading/Heading";
import styles from "./Home.module.css";
import {
	ShapeHomeBottom,
	ShapeHomeBottomFilled,
	ShapeHomeTop,
} from "@/components/Shapes";
import Button from "@/components/Button/Button";
import { ProjectList } from "@/components/ProjectList/ProjectList";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Alexia Villiez - UI Designer",
	description: "",
	openGraph: {
		title: "Alexia Villiez - UI Designer",
		description: "",
		url: "https://villiezalexia.fr",
		type: "website",
		siteName: "Alexia Villiez - UI Designer",
		images: [
			{
				url: "/meta.png",
				width: 1414,
				height: 749,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Alexia Villiez - UI Designer",
		description: "",
		images: [
			{
				url: "/meta.png",
				width: 1414,
				height: 749,
			},
		],
	},
};

export const Home = () => {
	return (
		<div className={styles.page}>
			<ShapeHomeTop />
			<ShapeHomeBottomFilled />
			<ShapeHomeBottom />
			<section className={styles.intro}>
				<Heading>Allo, je suis Alexia, UI designer</Heading>
				<p className={styles.introText}>
				À Montréal depuis 2019, j’ai à cœur de créer des expériences attractives et interactives pour tous les publics. J’ai toujours aimer créer, inventer, apprendre et imaginer depuis toute petite. Voici quelques projets sur lesquels j’ai pu travailler, au cours des dernières années.
				</p>
			</section>
			<div id="projects" className={styles.scroll} />
			<ProjectList />
			<section
				className={[styles.contact, styles.scroll].join(" ")}
				id="contact"
				data-section="contact"
			>
				<Heading>Contact</Heading>
				<p className={styles.contactText}>
					Envie de collaborer ou simplement de discuter de votre projet?
					N’hésitez pas à me contacter.
				</p>
				<Button href="#" target="_self" rel="noopener noreferrer">
					Télécharger mon CV
				</Button>
			</section>
		</div>
	);
};
