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
		//Quiz Citoyennete
	{
		list: {
			format: "landscape",
			title: "Jeu questionnaire",
			description:
				"Répondre à des questions d'un faux test pour obtenir la citoyenneté.",
			media: {
				type: "image",
				src: "/projects/_QuizCitoyennete/QuizCitoyennete_0.png",
				alt: "Logo Who wants to be a canadian",
			},
		},
		url: "who-wants-to-be-a-canadian",
		hero: [
			{
				type: "image",
				src: "/projects/_QuizCitoyennete/QuizCitoyennete_1.jpg",
				alt: "Interface de l'écran titre",
			},
			{
				type: "image",
				src: "/projects/_QuizCitoyennete/QuizCitoyennete_2.jpg",
				alt: "Interface des consignes",
			},
		],
		title: "Who wants to be a canadian?",
		description: [
			"Ce jeu a été réalisé pour une amie à la suite de son obtention de la citoyenneté canadienne. Le but était de refaire le test de la citoyenneté qu'elle avait passé, mais avec des questions plus personnalisées et avec un design plus attractif.", 
		],
		year: 2024,
		index: 0,
		client: "Projet personnel",
		collab: "",
		tags: ["Design UI"],
		screenshots: [
			{
				left: {
					media: {
						type: "video",
						src: [
							"/projects/_QuizCitoyennete/QuizCitoyennete_3.mp4",
							"/projects/_QuizCitoyennete/QuizCitoyennete_3.webm",
						],
						alt: "Vidéo du jeu",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_QuizCitoyennete/QuizCitoyennete_4.jpg",
						alt: "Interface d'une des questions",
					},
				},
			},
		],
	},
		//CATS
	{
		list: {
			format: "portrait",
			title: "Projet personnel",
			description:
				"Danser ou combattre entre chats avec des déguisements.",
			media: {
				type: "image",
				src: "/projects/_CATS/CATS_0.png",
				alt: "Une illustration d'un chat avec un chapeau de fête",
			},
		},
		url: "cats",
		hero: [
			{
				type: "image",
				src: "/projects/_CATS/CATS_1.png",
				alt: "Interface de l'écran titre",
			},
			{
				type: "image",
				src: "/projects/_CATS/CATS_2.jpg",
				alt: "Interface de choix de chapeau",
			},
		],
		title: "Cats",
		description: [
			"Cats est un jeu de danse et de combat qui se joue en binôme. Les joueurs choisissent le déguisement de leur chat, avant de choisir s'ils souhaitent danser sur des musiques (à la manière de just dance) ou de se combattre.",
			"Au fur et à mesure de l'avancement les joueurs débloquent des chapeaux. J'ai réalisé les illustrations et le design d'interface. Il se joue à l'aide d'une manette.",
		],
		year: 2024,
		index: 1,
		client: "Projet personnel",
		collab: "",
		tags: ["Illustration", "Design UI"],
		screenshots: [
			{
				left: {
					media: {
						type: "video",
						src: [
							"/projects/_CATS/CATS_3.mp4",
							"/projects/_CATS/CATS_3.webm",
						],
						alt: "Vidéo du choix de chapeau",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_CATS/CATS_4.jpg",
						alt: "Interface de choix de chanson",
					},
				},
			},
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_CATS/CATS_5.jpg",
						alt: "Illustrations avec les différents chapeaux d'un des chats",
					},
				},
				right: {
					media: {
						type: "video",
						src: [
							"/projects/_CATS/CATS_6.mp4",
							"/projects/_CATS/CATS_6.webm",
						],
						alt: "Vidéo d'une des danse",
					},
				},
			},
			{
				left: {
					media: {
						type: "video",
						src: [
							"/projects/_CATS/CATS_7.mp4",
							"/projects/_CATS/CATS_7.webm",
						],
						alt: "Vidéo d'une combat",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_CATS/CATS_8.jpg",
						alt: "Illustrations avec les différents chapeaux d'un des chats",
					},
				},
			},
		],
	},
		//PAC
	{
		list: {
			format: "portrait",
			title: "Exposition Interactive",
			description:
				"Une exposition ludique éphémère sur la langue française au Québec et en Amérique du Nord.",
			media: {
				type: "image",
				src: "/projects/_PAC/PAC_accueil.png",
				alt: "Des lettres f dans plusieurs formes et couleurs",
			},
		},
		url: "le-francais-une-langue-a-celebrer",
		hero: [
			{
				type: "image",
				src: "/projects/_PAC/PAC_Image1.png",
				alt: "Deux personnes jouent à la table interactive de l'exposition",
			},
			{
				type: "image",
				src: "/projects/_PAC/PAC_Image2.png",
				alt: "Deux personnes jouent au questionnaire de l'exposition",
			},
		],
		title: "Le français, une langue à célébrer!",
		description: [
			"Pour le 45ème anniversaire de la Charte de la langue française, le mandat était de concevoir et réaliser une exposition interactive sur la langue française au Québec et en Amérique du Nord. Le résultat, une exposition ludique, colorée, divisée en plusieurs zones, avec des vidéos, un jeu de questionnaire, un karaoké et des jeux interactifs numériques.",
			"En collaboration avec La Bande à Paul en charge de la scénographie de l'exposition, CREO avait en charge les huit dispositifs interactifs.",
			"Les objectifs : garantir la cohérence de l'interface avec le contenu et l'univers de l'exposition, respecter l'identité visuelle de l'exposition (épurée et couleurs vives), concevoir des interfaces intuitives, attrayante et accessible à un public familiale.",
			"J'ai été amenée à concevoir visuellement deux des interactifs de l'exposition, en collaborant avec la Bande à Paul pour le contenu.",
		],
		year: 2023,
		index: 2,
		client: "Pointe-à-Callière, cité d'archéologie et d'histoire de Montréal",
		collab: "La bande à Paul (scénographie)",
		tags: ["Exposition Interactive", "Design UI"],
		screenshots: [
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_PAC/PAC_Image3.png",
						alt: "L'interface du jeu Accents d'Amériques",
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
						alt: "L'interface du questionnaire Vite sur tes patins!",
					},
				},
			},
			{
				left: {
					description: {
						title: "",
						text: "Voici la déclinaison de la charte graphique numérique des cinq zones de l'exposition, réalisée par le directeur artistique du projet chez CREO, à la suite de la scénographie et la charte des couleurs produite par La Bande à Paul. Également voici des premières ébauches de la table interactive et du jeu questionnaire, sur lesquels j'ai pu travailler dans ce projet.",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_PAC/PAC_Image5.png",
						alt: "Les couleurs des zones de l'exposition",
					},
				},
			},
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_PAC/PAC_Image6.png",
						alt: "Les anciennes versions de l'interface de Accents d'Amérique",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_PAC/PAC_Image7.png",
						alt: "Les anciennes versions de l'interface de Vite sur tes patins!",
					},
				},
			},
		],
	},
		//TE draper
	{
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
		index: 3,
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
						text: "Creo a imaginé un jeu collaboratif, amusant et interactif pour faire découvrir cet univers aux plus jeunes. Avec un dispositif qui rappelle une rive, les jeunes doivent traverser la rivière sur des billes de bois en mousse poser au sol, pour aller défaire l'embâcle sur les écrans de l'autre côté de la rive, le plus vite possible. J'ai participé à ce projet en tant que UI designer pour les interfaces du jeu. Les objectifs : faire correspondre les couleurs du jeu avec celles de la scénographie, faire en sorte que les interfaces soient compréhensibles et intuitives pour le public visé.",
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
		//Carbone scolere
	{
				list: {
					format: "landscape",
					title: "Jeu en ligne ludo-éducatif",
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
				title: "Carbone Scol'ère jeu ludo-éducatif",
				description: [
					"Carbone Scol'ère souhaitait sensibiliser les jeunes aux changements climatiques et qu'ils adoptent des comportements écoresponsables à travers un jeu en ligne disponible dans les écoles.",
					"Le jeu permet l'apprentissage par l'enquête, en se posant des questions sur les thèmes du changement climatique, comme les gaz à effet de serre, la consommation, l'énergie et le transport, la gestion des matières résiduelles. Le joueur est plongé dans un monde d'extraterrestre constitué de cinq îles (savane, tropical, jungle, glacier, ...), dans lequel il pourra enquêter sur les GES et découvrir leur impact sur la planète.",],
				year: 2023,
				index: 4,
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
								text: "Dans un univers coloré et très engageant, le joueur doit aller parler aux habitants de l'île et répondre à des questions, associer des cartes, associer des items au sein d'un plateformer, pour faire prendre conscience aux élèves de bonnes actions à adopter pour avoir de bons comportements écoresponsables.",
							},
						},
					},
					{
						left: {
							description: {
								title: "",
								text: "Dans ce projet, j'ai été amené à concevoir les visuels des interactions UI (boutons, icônes) suite à la charte graphique établi par la directrice artistique du projet. Également l'interface et les niveaux des quatre plateformers (le placement des tuiles, le UI), en collaboration avec les programmeurs.",
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
		//CSMOCGQ
	{
		list: {
			format: "portrait",
			title: "Questionnaire en ligne",
			description: "Jeu en ligne multiplateforme pour découvrir les métiers du secteur des communications graphiques.",
			media: {
				type: "image",
				src: "/projects/_CSMOCGQ/CSMOCGQ_0.png",
				alt: "Liste de métiers",
			},
		},
		url: "createur-impact",
		hero: [
			{
				type: "image",
				src: "/projects/_CSMOCGQ/CSMOCGQ_1.png",
				alt: "Interface d'une fiche métier sur ordinateur",
			},
			{
				type: "image",
				src: "/projects/_CSMOCGQ/CSMOCGQ_2.png",
				alt: "Interface des résultats du questionnaire sur ordinateur",
			},
		],
		title: "Serais-tu un créateur d'impact sans le savoir?",
		description: [
			"C'est un jeu en ligne multiplateforme qui vise à engager le public du secondaire et les adultes souhaitant retourner aux études dans la découverte des métiers du secteur des communications graphiques.",
			"Le joueur répond à une série de questions qui l'orientent vers des formations ou des emplois qui conviendraient à son profil.",
		],
		year: 2022,
		index: 5,
		client: "Graficompétences (comité sectoriel de main d'oeuvre des communications graphique du québec - csmocgq)",
		collab: "",
		tags: ["Web", "Design UI"],
		screenshots: [
			{
				left: {
					media: {
						type: "image",
						src:"/projects/_CSMOCGQ/CSMOCGQ_3.png",
						alt: "Mockup du projet en version ordinateur et téléphone",
					},
				},
				right: {
					description: {
						title: "",
						text: "En me basant sur la charte graphique déjà existante de Créateurs d'impact, l'objectif était de créer des interfaces attrayantes et intuitives pour tous les publics. J'ai essayé de garder et de réutiliser les motifs et textures visuelles de la charte graphique, comme le “+” du logo, ainsi que les formes géométriques, sans trop surcharger les interfaces.",
					},
				},
			},
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_CSMOCGQ/CSMOCGQ_4.png",
						alt: "Interface de connexion sur ordinateur",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_CSMOCGQ/CSMOCGQ_5.png",
						alt: "Interface sur téléphone du questionnaire",
					},
				},
			},
		],
	},
		//SAAQ
	{
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
		description: [
			"Le mandat était de créer un outil éducatif interactif, pour sensibiliser les jeunes de 5 à 8 ans à la sécurité routière et influencer leur attitude, afin qu'ils adoptent des comportements plus prudents dans leurs déplacements vers l'école, que ce soit à pied ou en autobus scolaire.",
			"CREO a développé dix segments d'animation interactive, dans un univers coloré, mettant en avant les mesures de prudence élémentaire pour leur faire prendre conscience des conséquences. Chaque capsule est composée d'une vidéo et d'un jeu interactif qui permet aux enfants de mettre en pratique les notions de sécurité routière apprises.",
		],
		year: 2021,
		index: 6,
		client: "Société de l'assurance automobile du québec (SAAQ)",
		collab: "",
		tags: ["Web", "Design UI", "Graphisme"],
		screenshots: [
			{
				left: {
					media: {
						type: "video",
						src: [
							"/projects/_SAAQ/SAAQ_3_1.mp4",
							"/projects/_SAAQ/SAAQ_3_1.webm",
						],
						alt: "Axelle regarde à droite, à gauche et en arrière avant de traverser",
					},
				},
				right: {
					description: {
						title: "",
						text: "L'objectif étant de créer des interfaces à la fois ludiques et informatives pour un jeune public. À travers ce projet, j'ai été amené à travailler sur des interfaces du jeu (site web, popups, mini-jeux), sur des illustrations, également faire du tracking de certains éléments dans les vidéos d'animation et collaborer avec la directrice artistique et l'artiste 3D du projet.",
					},
				},
			},
			{
				left: {
					media: {
						type: "image",
						src: "/projects/_SAAQ/SAAQ_5.png",
						alt: "Visuels en noir et blanc de l'interface du site web",
					},
				},
				right: {
					media: {
						type: "image",
						src: "/projects/_SAAQ/SAAQ_4.png",
						alt: "Mockup sur un ordinateur d'un popup du jeu",
					},
				},
			},
		],
	},
		//UPA
	{
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
		index: 7,
		client: "L'union des producteurs agricoles (UPA)",
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
						text: "Le jeu est accessible sur différents supports à travers un site internet, qui permet aux parents de suivre l'évolution de leurs enfants et de regrouper toutes les informations des agriculteurs et producteurs représentés dans le jeu. J'ai participé à ce projet en créant certaines des illustrations, des animations et des interfaces de jeu en déclinant le style visuel créer par la directrice artistique du projet.",
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
