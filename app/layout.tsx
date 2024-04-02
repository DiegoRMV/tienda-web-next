import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "TiendaGX",
	description: "Tienda de productos electronicos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="flex justify-center dark">
			<body className="min-h-screen flex flex-col w-full justify-between max-w-[1440px]">
				<header className="relative">
					<Navbar />
				</header>

				<Providers>
					<main className="pt-20 grow justify-center h-full">{children}</main>
				</Providers>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
