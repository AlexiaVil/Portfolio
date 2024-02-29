import Heading from "@/components/Heading/Heading";
import styles from "./page.module.css";

export const Home = () => {
	return (
		<div className={styles.page}>
			<Heading>HEADINGS - H1</Heading>
			<Heading variant="h2">HEADINGS - H2</Heading>
			<Heading variant="h3">HEADINGS - H3</Heading>
			<Heading variant="h4">ANNEE - TITRE DU PROJET</Heading>
			<p>
				Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
				libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
				sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
				Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
				efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum
				eu nisl.
			</p>
		</div>
	);
};
