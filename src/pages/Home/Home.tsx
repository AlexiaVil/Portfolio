import Heading from "@/components/Heading/Heading";
import styles from "./Home.module.css";
import { ShapeHomeTop } from "@/components/Shapes";

export const Home = () => {
	return (
		<div className={styles.page}>
			<section className={styles.intro}>
				<ShapeHomeTop />
				<Heading>UI Designer</Heading>
				<p>
					À Montréal depuis 5 ans, j’ai à coeur de créer des expériences
					attractives et interactives.
				</p>
			</section>
		</div>
	);
};
