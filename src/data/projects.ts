export type ProjectFormat = "landscape" | "portrait";
export type ProjectScreenshot = {
	media?: {
		type: "image" | "video";
		src: string | string[];
		alt: string;
	};
	description?: {
		title: string;
		text: string;
	};
};

export interface ProjectData {
	list: {
		format: ProjectFormat;
		title: string;
		description: string;
		image: string;
	};
	url: string;
	hero: string[];
	title: string;
	description: string[];
	year: number;
	index: number;
	client: string;
	collab: string;
	tags: string[];
	screenshots: {
		left: ProjectScreenshot;
		right: ProjectScreenshot;
	}[];
}

export const projects: ProjectData[] = [
	{
		list: {
			format: "portrait",
			title: "Exposition Interactive",
			description:
				"Une exposition ludique éphémère sur la langue française au Québec et en Amérique du Nord.",
			image: "/projects/_placeholder/500.png",
		},
		url: "le-francais-une-langue-a-celebrer",
		hero: ["/projects/_placeholder/169.png", "/projects/_placeholder/169.png"],
		title: "Le français, une langue à célébrer!",
		description: [
			"Pour le 45ème anniversaire de la Charte de la langue française, le mandat était  de concevoir et réaliser une exposition interactive sur la langue française au Québec et en Amérique du Nord. Le résultat, une exposition ludique, colorée, divisée  en plusieurs zones, avec des vidéos, un jeu de questionnaire, un karaoké et des jeux interactifs numériques.",
			"En collaboration avec La Bande à Paul, en charge de la direction artistique de l'exposition, CREO avait en charge la direction artistique des huit interactifs.",
			"Les objectifs : Garantir la cohérence de l'interface avec le contenu et l'univers de l'exposition. Respecter l'identité visuelle de l'exposition (épurée et couleurs vives). Concevoir des interfaces intuitives, attrayante et accessible à un public familiale.",
		],
		year: 2023,
		index: 0,
		client: "Pointe-à-Callière, cité d'archéologie et d'histoire de Montréal",
		collab: "La bande à Paul",
		tags: ["Exposition Interactive", "Design UI"],
		screenshots: [
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_placeholder/169.png",
						alt: "Accents d'Amérique",
					},
				},
				right: {
					description: {
						title: "Une carte interactive - Accents d'Amérique",
						text: "Le but, faire glisser des cartes personnages sur leur provenance géographique en Amérique du Nord, dans un temps imparti.",
					},
				},
			},
			{
				left: {
					description: {
						title: "Un jeu questionnaire - Vite sur tes patins!",
						text: "Participer à un grand jeu-questionnaire animé par Katherine Levac et Richardson Zéphir.  La vidéo a été réalisée à l'externe par La Bande à Paul.",
					},
				},
				right: {
					media: {
						type: "video",
						src: [
							"/projects/_placeholder/169.mp4",
							"/projects/_placeholder/169.webm",
						],
						alt: "Vite sur tes patins!",
					},
				},
			},
		],
	},
	{
		list: {
			format: "portrait",
			title: "Exposition Interactive",
			description:
				"Une exposition ludique éphémère sur la langue française au Québec et en Amérique du Nord.",
			image: "/projects/_placeholder/500.png",
		},
		url: "le-francais-une-langue-a-celebrer-2",
		hero: ["/projects/_placeholder/169.png", "/projects/_placeholder/169.png"],
		title: "Le français, une langue à célébrer!",
		description: [
			"Pour le 45ème anniversaire de la Charte de la langue française, le mandat était  de concevoir et réaliser une exposition interactive sur la langue française au Québec et en Amérique du Nord. Le résultat, une exposition ludique, colorée, divisée  en plusieurs zones, avec des vidéos, un jeu de questionnaire, un karaoké et des jeux interactifs numériques.",
			"En collaboration avec La Bande à Paul, en charge de la direction artistique de l'exposition, CREO avait en charge la direction artistique des huit interactifs.",
			"Les objectifs : Garantir la cohérence de l'interface avec le contenu et l'univers de l'exposition. Respecter l'identité visuelle de l'exposition (épurée et couleurs vives). Concevoir des interfaces intuitives, attrayante et accessible à un public familiale.",
		],
		year: 2023,
		index: 1,
		client: "Pointe-à-Callière, cité d'archéologie et d'histoire de Montréal",
		collab: "La bande à Paul",
		tags: ["Exposition Interactive", "Design UI"],
		screenshots: [
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_placeholder/169.png",
						alt: "Accents d'Amérique",
					},
				},
				right: {
					description: {
						title: "Une carte interactive - Accents d'Amérique",
						text: "Le but, faire glisser des cartes personnages sur leur provenance géographique en Amérique du Nord, dans un temps imparti.",
					},
				},
			},
			{
				left: {
					description: {
						title: "Un jeu questionnaire - Vite sur tes patins!",
						text: "Participer à un grand jeu-questionnaire animé par Katherine Levac et Richardson Zéphir.  La vidéo a été réalisée à l'externe par La Bande à Paul.",
					},
				},
				right: {
					media: {
						type: "video",
						src: [
							"/projects/_placeholder/169.mp4",
							"/projects/_placeholder/169.webm",
						],
						alt: "Vite sur tes patins!",
					},
				},
			},
		],
	},
];
