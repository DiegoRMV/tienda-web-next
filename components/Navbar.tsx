"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
	const [isClick, setIsClick] = useState(false);
	const toggleNavbar = (): void => {
		setIsClick(!isClick);
	};
	return (
		<>
			<nav className="bg-gray fixed top-0 left-0 right-0">
				<div className="max-w-7xl mx-auto sm:px-2 lg:px-4">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<a
									href="/"
									className="text-white flex items-center text-2xl lg:text-3xl xl:text-4xl"
								>
									<Image
										src={logo}
										alt="Logo GX"
										className="mx-1 w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10"
										width={32}
										height={32}
									/>
									<span className="text-green text-2xl lg:text-3xl xl:text-4xl font-semibold">
										Tienda
									</span>
									GX
								</a>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center space-x-4">
								<Link
									href="/"
									className="hover:text-green text-md lg:text-lg font-medium tracking-widest text-center"
								>
									Home
								</Link>
								<Link
									href="/product"
									className="hover:text-green text-md lg:text-lg font-medium tracking-widest text-center"
								>
									Product
								</Link>
								<Link
									href="/about-us"
									className="hover:text-green text-md lg:text-lg font-medium tracking-widest text-center"
								>
									About-Us
								</Link>
								<Link
									href="/contact"
									className="hover:text-green text-md lg:text-lg font-medium tracking-widest text-center"
								>
									Contact
								</Link>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-4 flex items-center space-x-4">
								<Link
									href="/login"
									className="hover:text-green hover:animate-pulsing"
								>
									<FaRegUser size={26} />
								</Link>
							</div>
						</div>
						<div className="md:hidden flex items-center">
							<button
								className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:ring-2 focus:ring-inset focus:ring-white"
								onClick={toggleNavbar}
							>
								{isClick ? (
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16m-7 6h7"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				{isClick && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
							<Link href="/" className="block p-2 hover:text-green">
								Home
							</Link>
							<Link href="/product" className="block p-2 hover:text-green">
								Product
							</Link>
							<Link href="/about-us" className="block p-2 hover:text-green">
								About-Us
							</Link>
							<Link href="/contact" className="block p-2 hover:text-green">
								Contact
							</Link>
							<Link
								href="#"
								className="inline-flex p-2 hover:text-green justify-center"
							>
								<FaRegUser size={24} />
							</Link>
						</div>
					</div>
				)}
			</nav>
		</>
	);
}
