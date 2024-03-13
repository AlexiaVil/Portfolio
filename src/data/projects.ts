export type ProjectFormat = "landscape" | "portrait";
export type ProjectMedia = {
	type: "image" | "video";
	src: string | string[];
	alt: string;
};
export type ProjectScreenshot = {
	media?: ProjectMedia;
	description?: {
		title?: string;
		text?: string;
	};
};

export interface ProjectData {
	list: {
		format: ProjectFormat;
		title: string;
		description: string;
		media: ProjectMedia;
	};
	url: string;
	hero: ProjectMedia[];
	title: string;
	description: string[];
	year: number;
	index: number;
	client: string;
	collab?: string;
	tags: string[];
	screenshots: {
		left?: ProjectScreenshot;
		right?: ProjectScreenshot;
	}[];
}

export const projects: ProjectData[] = [
	{
		//PAC
		list: {
			format: "portrait",
			title: "Exposition Interactive",
			description:
				"Une exposition ludique éphémère sur la langue française au Québec et en Amérique du Nord.",
			media: {
				type: "image",
				src: "/projects/_PAC/PAC_accueil.png",
				alt: "",
			},
		},
		url: "le-francais-une-langue-a-celebrer",
		hero: [
			{
				type: "image",
				src: "/projects/_PAC/PAC_Image1_credit.png",
				alt: "",
			},
			{
				type: "image",
				src: "/projects/_PAC/PAC_Image2_credit.png",
				alt: "",
			},
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
		//TE draper
		list: {
			format: "landscape",
			title: "Exposition Interactive",
			description: "Apprendre de manière ludique le travail des draveurs.",
			media: {
				type: "video",
				src: [
					"/projects/_TEDRAPER/TEDRAPER_0.mp4",
					"/projects/_TEDRAPER/TEDRAPER_0.webm",
				],
				alt: "",
			},
		},
		url: "alerte-a-embacle",
		hero: [
			{
				type: "image",
				src: "/projects/_TEDRAPER/TEDRAPER_1.png",
				alt: "",
			},
			{
				type: "image",
				src: "/projects/_TEDRAPER/TEDRAPER_2.png",
				alt: "",
			},
		],
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
						title: "",
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
	{
		//SAAQ
		list: {
			format: "portrait",
			title: "Jeu éducatif",
			description: "Dix segments d'animation interactive et de jeu pour sensibiliser les jeunes à la sécurité routière.",
			media: {
				type: "image",
				src: "/projects/_SAAQ/SAAQ_0.png",
				alt: "Axelle et Pitchouf avec le brigadier",
			},
		},
		url: "axelle-et-pitchouf",
		hero: [
			{
				type: "image",
				src: "/projects/_SAAQ/SAAQ_1.jpg",
				alt: "Axelle et Pitchouf",
			},
			{
				type: "image",
				src: 
					"/projects/_SAAQ/SAAQ_2.jpg",
				alt: "Scénario près d'un bus scolaire",
			},
		],
		title: "Axelle et Pitchouf: en marche!",
		description: ["..."],
		year: 2021,
		index: 3,
		client: "Société de l’assurance automobile du québec (SAAQ)",
		collab: "ÉduGénie",
		tags: ["Web", "Design UI", "Graphisme"],
		screenshots: [
			{
				left: {
					description: {
						title: "",
						text: "...",
					},
				},
				right: {
					media: {
						type: "video",
						src: [
							"/projects/_SAAQ/SAAQ_3_1.mp4",
							"/projects/_SAAQ/SAAQ_3_1.webm",
						],
						alt: "Axelle regarde à droite, à gauche et en arrière avant de traverser",
					},
				},
			},
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_SAAQ/SAAQ_4.png",
						alt: "Embâcle côté rivière",
					},
				},
				right: {
					description: {
						title: "",
						text: "...",
					},
				},
			},
		],
	},
	{
		//Carbone scolere
		list: {
			format: "landscape",
			title: "Jeu en ligne pour les écoles",
			description: "Adopter des comportements écoresponsables dans la lutte contre les changements climatiques.",
			media: {
				type: "image",
				src: "/projects/_Carbone/Carbone_0.png",
				alt: "L'île de la savane du jeu",
			},
		},
		url: "carbone-scolere",
		hero: [
			{
				type: "image",
				src: "/projects/_Carbone/Carbone_1.png",
				alt: "L'île de la jungle dans le jeu",
			},
			{
				type: "image",
				src: "/projects/_Carbone/Carbone_2.png",
				alt: "Toutes les îles du jeu, certaines sont barrées",
			},
		],
		title: "Carbone Scol'ère jeu en ligne",
		description: ["..."],
		year: 2023,
		index: 2,
		client: "COOP FA et le programme Carbone Scol'ère",
		collab: "",
		tags: ["Web", "Design UI", "Illustrations"],
		screenshots: [
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_Carbone/Carbone_3.png",
						alt: "Le premier plateformer",
					},
				},
				right: {
					description: {
						title: "",
						text: "...",
					},
				},
			},
			{
				left: {
					description: {
						title: "",
						text: "...",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_Carbone/Carbone_4.png",
						alt: "Le design system",
					},
				},
			},
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_Carbone/Carbone_5.png",
						alt: "Le deuxième plateformer, avec la récolte d'objets",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_Carbone/Carbone_6.png",
						alt: "L'ensemble du dernier plateformer",
					},
				},
			},
		],
	},
	{
		//UPA
		list: {
			format: "landscape",
			title: "Jeu numérique",
			description:
				"Faire découvrir les producteurs du Québec en aidant le chef du kasscrout.",
			media: {
				type: "image",
				src: "/projects/_UPA/UPA_kasscrout_0.png",
				alt: "kasscrout",
			},
		},
		url: "kasscrout",
		hero: [
			{
				type: "image",
				src: "/projects/_UPA/UPA_kasscrout_1.PNG",
				alt: "le chef avec le kasscrout et le joueur dans une des régions",
			},
			{
				type: "image",
				src: "/projects/_UPA/UPA_kasscrout_2.PNG",
				alt: "Menu des missions",
			},
		],
		title: "Kasscrout",
		description: [
			"Kasscrout est un jeu éducatif pour les jeunes de 9 à 12 ans. Il permet aux enfants de découvrir de manière ludique et interactive comment sont produits les aliments qu'ils consomment.",
			"Dans un univers absurde, loufoque et coloré, les joueurs doivent parcourir les régions du Québec, à la recherche des ingrédients demandés par le chef du Kasscrout. Le jeu est composé de 15 missions incluant plus de 50 mini-jeux.",
		],
		year: 2020,
		index: 4,
		client: "L’union des producteurs agricoles (UPA)",
		tags: ["Web", "Design UI", "Illustration", "Animation"],
		screenshots: [
			{
				left: {
					media: {
						type: "video",
						src: [
							"/projects/_UPA/UPA_kasscrout_3.mp4",
							"/projects/_UPA/UPA_kasscrout_3.webm",
						],
						alt: "Animation du chef du kasscrout",
					},
				},
				right: {
					description: {
						title: "",
						text: "J'ai participé à ce projet en créant certaines des illustrations, des animations, des interfaces de jeu, en déclinant le style visuel créer par la directrice artistique du projet.",
					},
				},
			},
			{
				left: {
					description: {
						title: "",
						text: "Le jeu est accessible sur différents supports à travers un site internet, qui permet aux parents de suivre l'évolution de leurs enfants et de regrouper toutes les informations des agriculteurs et producteurs représentés dans le jeu.",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_UPA/UPA_kasscrout_4.png",
						alt: "Mockup du jeu sur laptop et téléphone",
					},
				},
			},
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_UPA/UPA_kasscrout_5.PNG",
						alt: "Diverses illustrations du projet",
					},
				},
				right: {
					description: {
						title: "",
						text: "...",
					},
				},
			},
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_UPA/UPA_kasscrout_6.PNG",
						alt: "Popup de la carte du Québec",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_UPA/UPA_kasscrout_7.jpg",
						alt: "Jeu cherche et trouve",
					},
				},
			},
		],
	},
];
