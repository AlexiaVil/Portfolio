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
			image: "/projects/_PAC/PAC_accueil.png",
		},
		url: "le-francais-une-langue-a-celebrer",
		hero: [
			"/projects/_PAC/PAC_Image1_credit.png",
			"/projects/_PAC/PAC_Image2_credit.png",
		],
		title: "Le français, une langue à célébrer!",
		description: [
			"Pour le 45ème anniversaire de la Charte de la langue française, le mandat était de concevoir et réaliser une exposition interactive sur la langue française au Québec et en Amérique du Nord. Le résultat, une exposition ludique, colorée, divisée en plusieurs zones, avec des vidéos, un jeu de questionnaire, un karaoké et des jeux interactifs numériques.",
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
						src: "/projects/_PAC/PAC_Image3.png",
						alt: "Accents d'Amériques",
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
						text: "Participer à un grand jeu-questionnaire animé par Katherine Levac et Richardson Zéphir. La vidéo a été réalisée à l'externe par La Bande à Paul.",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_PAC/PAC_Image4.png",
						alt: "Vite sur tes patins!",
					},
				},
			},
		],
	},
	{
		list: {
			format: "landscape",
			title: "Exposition Interactive",
			description:
				"Apprendre de manière ludique le travail des draveurs.",
			image: "/projects/_placeholder/500.png",
		},
		url: "alerte-a-embacle-2",
		hero: ["/projects/_TEDRAPER/TEDRAPER_1.png", "/projects/_TEDRAPER/TEDRAPER_2.png"],
		title: "Alerte à l'embâcle!",
		description: [
			"Dans l'entrepôt de la Canadian International Paper (C.I.P.) situé à côté du site historique de T.E. Draper, CREO a été mandaté pour enrichir la visite de l'exposition permanente avec un espace dédié pour les groupes scolaires et les plus jeunes.",
			"Ainsi on peut découvrir le travail difficile et dangereux, mais important des draveurs du Québec. Les draveurs étaient des ouvriers forestiers qui contrôlaient la flottaison des billes de bois sur les rivières et les lacs du Québec.",
		],
		year: 2023,
		index: 1,
		client: "Le site historique T.E.Draper",
		collab: "Cécile Subra (scénographe)",
		tags: ["Exposition Interactive", "Design UI"],
		screenshots: [
			{
				left: {
					media: {
						type: "video",
						src: [
							"/projects/_TEDRAPER/TEDRAPER_3.mp4",
							"/projects/_TEDRAPER/TEDRAPER_3.webm",
						],
						alt: "Alerte à l'embâcle accueil",
					},
				},
				right: {
					description: {
						text: "Creo a donc imaginé un jeu collaboratif, amusant et interactif pour faire découvrir cet univers aux plus jeunes. Avec une scénographie qui rappelle une rive, les jeunes doivent traverser la rivière sur des billes de bois en mousse poser au sol, pour aller défaire l'embâcle de l'autre côté de la rive le plus vite possible.",
					},
				},
			},
			{
				left: {
					media: {
						type: "video",
						src: [
							"/projects/_TEDRAPER/TEDRAPER_4.mp4",
							"/projects/_TEDRAPER/TEDRAPER_4.webm",
						],
						alt: "Embâcle côté rivière",
					},
				},
				right: {
					media: {
						type: "video",
						src: [
							"/projects/_TEDRAPER/TEDRAPER_5.mp4",
							"/projects/_TEDRAPER/TEDRAPER_5.webm",
						],
						alt: "Compteur côté rive",
					},
				},
			},
		],
	},
];
