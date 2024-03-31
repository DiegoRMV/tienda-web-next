import Image from "next/image";
import inicio from "@/assets/images/inicio.jpg";

export default function Home() {
	return (
		<>
			<section className="p-4">
				<div className="flex flex-col md:flex-row justify-center items-center gap-8">
					<Image
						src={inicio}
						className="rounded-lg"
						alt="Una notebook, lentes, auriculares y celular"
						width={340}
						height={400}
					/>

					<div className="md:col-span-2 content-center">
						<div className="text-white">
							<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
								Tecnologia
								<br />
								de Alta Gama
							</h1>
							<p className="mt-5 text-sm md:text-md lg:text-lg">
								Una industria en Tecnologia con marcas basadas en sus
								requerimientos. Ser un elemento esencial para los clientes al
								brindar productos y servicios diferenciados con el fin de ayudar
								a lograr sus aspiraciones. Ofrecer una amplia gama de productos
								tecnologicos para el publico, bien diseñados y funcionales a
								precios acccesibles.
							</p>
							<div className="flex justify-center items-center mt-10">
								<a
									href="#"
									className="rounded-md p-2 bg-blue-600 hover:bg-blue-500 text-sm md:text-md lg:text-lg xl:text-xl"
								>
									Mas Informacion
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
