import Image from "next/image";
import product from "@/assets/images/producto_ejemplo.jpg";
import Detail from "./Detail";
import { Button } from "@nextui-org/react";

export default function Card() {
	return (
		<div className="flex flex-col max-w-96 bg-gray items-center rounded-xl">
			<Image
				src={product}
				className="rounded-t-xl object-none max-h-[480px]"
				alt="producto"
				width={400}
			/>
			

			<div className="p-2 lg:p-4">
				<h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-2 lg:mb-4 ">
					Title
				</h2>

				<p className="line-clamp-3 text-sm md:text-md lg:text-lg mb-2 lg:mb-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
					voluptatum? Voluptatem, rerum officiis porro libero voluptate, ex
					delectus dicta autem modi dolore fuga fugit incidunt sed sapiente
					saepe, aspernatur voluptatum?
				</p>

				<div className="flex justify-between pb-2 lg:pb-4">
					<div className="flex items-end">
						<p className="text-tahiti text-sm md:text-md">12 dues 320</p>
					</div>
					<div className="text-4xl lg:text-5xl">$ 1000</div>
				</div>
			</div>
			<div className="flex justify-between w-full p-2 lg:p-4">
				<div>
					<Detail />
				</div>
				<div >
					<Button className="bg-purple p-2 rounded-xl w-32 text-md lg:text-lg text-white">
						Buy
					</Button>
				</div>
			</div>
		</div>
	);
}
