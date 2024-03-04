import { ProjectProps } from "@/components/Project/Project";

export type ProjectData = Omit<ProjectProps, "align">;

export const projects: ProjectData[] = [
	{
		format: "portrait",
		title: "Exposition Interactive",
		url: "/exposition-interactive",
		subtitle: "2023 - Le français, une langue à célébrer!",
		description:
			"Une exposition ludique éphémère sur la langue française au Québec et en Amérique du Nord.",
		image: "/projects/_placeholder/500.png",
	},
	{
		format: "landscape",
		title: "Exposition Interactive 2",
		url: "/exposition-interactive",
		subtitle: "2023 - alerte à l’embâcle!",
		description: "Apprendre de manière ludique le travail des draveurs.",
		image: "/projects/_placeholder/500.png",
	},
	{
		format: "landscape",
		title: "Jeu en ligne multiplateforme",
		url: "/jeu-en-ligne-multiplateforme",
		subtitle: "2022 - Carbone Scol'ère",
		description:
			"Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
		image: "/projects/_placeholder/500.png",
	},
	{
		format: "portrait",
		title: "Jeux d'apprentissage",
		url: "/jeux-d-apprentissage",
		subtitle: "2021 - axelle et pitchouf : en marche !",
		description:
			"Dix segments d'animation interactive et de jeu pour sensibiliser les jeunes à la sécurité routière.",
		image: "/projects/_placeholder/500.png",
	},
	{
		format: "landscape",
		title: "Jeu numérique",
		url: "/jeux-numerique",
		subtitle: "2020 - Kasskrout",
		description:
			"Faire découvrir le Québec et les producteurs, au travers de recette que le joueur doit accomplir en allant chercher des aliments en parcourant une carte des régions.",
		image: "/projects/_placeholder/500.png",
	},
] as const;
