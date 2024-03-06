import {
	Big_Shoulders_Stencil_Text,
	Big_Shoulders_Text,
	Antonio,
} from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import { Metadata } from "next";

const bsst = Big_Shoulders_Stencil_Text({
	subsets: ["latin"],
	variable: "--bsst",
});

const bst = Big_Shoulders_Text({
	subsets: ["latin"],
	variable: "--bst",
});

const antonio = Antonio({
	subsets: ["latin"],
	variable: "--antonio",
});

export const metadata: Metadata = {
	metadataBase: new URL(
		`https://villiezalexia.fr/${process.env.basePath ? `${process.env.basePath}/` : ""}`,
	),
	title: "Alexia Villiez - UI Designer",
	description: "",
	openGraph: {
		images: "/og.png",
		locale: "fr_FR",
		type: "website",
		siteName: "Alexia Villiez - UI Designer",
		description: "",
		url: "https://villiezalexia.fr",
	},
	twitter: {
		card: "summary_large_image",
		description: "",
		images: "/og.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={[bsst.variable, bst.variable, antonio.variable].join(" ")}
			>
				<Header />
				<main className="container">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
