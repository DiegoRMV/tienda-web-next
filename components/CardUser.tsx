import { icons } from "@/utils/icons";
import Image from "next/image";
import user from "@/assets/images/user_ejemplo.jpg";
import Link from "next/link";

export default function CardUser() {
	const { facebook, instagram, github, linkedin } = icons;
	return (
		<div className="flex flex-col bg-[#092d33] rounded-lg border-4 lg:max-w-96">
			<Image
				src={user}
				className="rounded-t-lg"
				alt="Foto Diego"
				width={400}
				height={400}
			/>

			<div className="text-center p-4">
				<h5 className="text-white text-xl uppercase font-medium">
					Diego Menchaca
				</h5>
				<h6 className="py-2">
					Técnico Electrónico <br />
					Programador full-stack en progreso
				</h6>
				<div className="flex justify-center">
					<Link href="#">
						{facebook}
					</Link>
					<Link href="www.linkedin.com/in/diego-rubén-menchaca-vera-ba46b9262">
						{linkedin}
					</Link>
					<Link href="#">
						{instagram}
					</Link>
					<Link href="https://github.com/DiegoRMV" target="_blank">
						{github}
					</Link>
				</div>
			</div>
		</div>
	);
}
