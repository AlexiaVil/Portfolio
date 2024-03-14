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
import Link from "@/components/Link/Link";

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
				<Heading>Alexia Villiez, UI designer</Heading>
				<p className={styles.introText}>
					À Montréal depuis 2019, j’ai à cœur de créer des expériences
					attractives et interactives pour tous les publics. J’ai toujours aimer
					créer, inventer, apprendre et imaginer depuis toute petite. Voici
					quelques projets sur lesquels j’ai pu travailler, au cours des
					dernières années.
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
					Pour plus de détails sur mon parcours, n’hésitez pas à regarder mon{" "}
					<a
						href="/CV_AlexiaVilliez.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						CV
					</a>{" "}
					ou mon profil{" "}
					<a
						href="https://www.linkedin.com/in/alexia-villiez-3ba112136"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					. Pour voir d’autres de mes réalisations, rendez-vous sur mon{" "}
					<a
						href="https://www.behance.net/alexvilliee70a"
						target="_blank"
						rel="noopener noreferrer"
					>
						Behance
					</a>
					. Je suis toujours attentive aux nouveaux projets et opportunités.
					N’hésitez pas à me contacter ✨
				</p>
				<Button
					href="/CV_AlexiaVilliez.pdf"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mon CV
				</Button>
			</section>
		</div>
	);
};
