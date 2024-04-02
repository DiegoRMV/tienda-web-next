import CardUser from "@/components/CardUser";

export default function AboutUs() {
	return (
		<section className="p-2 md:p-4">
			<div className="flex flex-wrap lg:flex-row px-2 md:px-4 lg:px-8 py-2">
				<div className="text-center flex flex-col items-center justify-center w-full md:w-1/2 lg:w-2/3 my-4">
					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6">
						{" "}
						<span className="text-green">Sobre </span>Nosotros
					</h2>
					<p className="text-sm md:text-base lg:text-lg">
						Somos una compañía que centra sus acciones en el usuario, ya que
						sabe que no hay crecimiento posible sin un producto y usabilidad
						excelentes. <br />
						Soluciones innovadoras para mejorar la experiencia de los usuarios,
						nuestro equipo cuenta con el conocimiento y la pasión necesarios
						para ofrecer la mejor calidad, atractivo y atencion a nuestros
						clientes.
					</p>
				</div>
				<div className="w-full md:w-1/2 lg:w-1/3 my-4">
					<video autoPlay muted src={"/animacion.webm"} width={520} loop />
				</div>
			</div>

			<h1 className="text-center my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
				El equipo
			</h1>
			<div className="flex flex-wrap justify-center gap-8">
				<CardUser />
				<CardUser />
				<CardUser />
			</div>
		</section>
	);
}
