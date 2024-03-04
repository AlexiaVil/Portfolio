import Heading from "@/components/Heading/Heading";
import styles from "./Home.module.css";
import {
	ShapeHomeBottom,
	ShapeHomeBottomFilled,
	ShapeHomeTop,
} from "@/components/Shapes";
import Button from "@/components/Button/Button";
import { ProjectList } from "@/components/ProjectList/ProjectList";

export const Home = () => {
	return (
		<div className={styles.page}>
			<ShapeHomeTop />
			<ShapeHomeBottomFilled />
			<ShapeHomeBottom />
			<section className={styles.intro}>
				<Heading>UI Designer</Heading>
				<p className={styles.introText}>
					À Montréal depuis 5 ans, j’ai à coeur de créer des expériences
					attractives et interactives.
				</p>
			</section>
			<ProjectList />
			<section className={styles.contact} id="contact">
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
