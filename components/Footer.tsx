import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export default function Footer() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center py-3 bg-gray text-white">
			<div className="flex items-center justify-center py-1">
				<div className="flex justify-center items-center text-xl md:text-2xl xl:text-3xl">
					<Image
						src={logo}
						alt="Logo GX"
						className="mx-1 w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
						width={32}
						height={32}
					/>
					<span className="text-xl md:text-2xl xl:text-3xl text-green font-medium">Tienda</span>GX
				</div>
			</div>
			<div className="flex items-center justify-center py-1">
				<div className="flex justify-center">
					<a className="py-1 px-2 lg:py-2 lg:px-4 border rounded-lg mx-1 hover:bg-green hover:text-black hover:animate-pulse-fade-in hover:border-white flex flex-col justify-center items-center" href="#" target="_blank">
						<FaFacebook className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
					</a>
					<a className="py-1 px-2 lg:py-2 lg:px-4 border rounded-lg mx-1 hover:bg-green hover:text-black hover:animate-pulse-fade-in hover:border-white flex flex-col justify-center items-center" href="#" target="_blank">
						<PiInstagramLogoFill className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
					</a>
					<a className="py-1 px-2 lg:py-2 lg:px-4 border rounded-lg mx-1 hover:bg-green hover:text-black hover:animate-pulse-fade-in hover:border-white flex flex-col justify-center items-center" href="#" target="_blank">
						<FaLinkedin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
					</a>
					<a className="py-1 px-2 lg:py-2 lg:px-4 border rounded-lg mx-1 hover:bg-green hover:text-black hover:animate-pulse-fade-in hover:border-white flex flex-col justify-center items-center" href="#" target="_blank">
						<FaGithub className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"/>
					</a>
				</div>
			</div>
			<div className="md:col-span-2 lg:col-span-1 flex items-center justify-center py-1">
				<p className="text-center text-sm md:text-md">
					© 2023 GX ARG - Todos los derechos reservados
				</p>
			</div>
		</div>
	);
}
