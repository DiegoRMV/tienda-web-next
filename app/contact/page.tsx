export default function Contact() {
	return (
		<section className="">
			<div className="text-center text-white pb-2">
				<h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4">
					Contacto
				</h2>
				<p className="text-xs md:text-sm lg:text-base xl:text-lg mb-2">
					Para más Informacion puedes dejar tu mensaje o visitar nuestro local
				</p>
			</div>

			<div className="flex flex-wrap justify-center items-center px-4">
				<div className="w-full md:w-1/2 flex flex-col justify-center bg-gray rounded-lg p-4 mb-4">
					<form action="#" className="flex flex-col">
						<input
							type="text"
							className="m-2 rounded-lg"
							placeholder="Nombre"
							required
						/>
						<input
							type="email"
							className="m-2 rounded-lg"
							placeholder="Email"
							required
						/>
						<textarea
							className="m-2 rounded-lg"
							placeholder="Mensaje"
							rows={4}
							required
						></textarea>

						<button className="text-center border m-2 rounded-lg p-2 text-lg bg-green text-black border-white hover:bg-gray hover:text-white font-medium hover:animate-flash">
							Enviar
						</button>
					</form>
				</div>
				<div className="w-full md:w-1/2 flex justify-center mb-4">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14495.864583043542!2d-65.41961948261721!3d-24.728042499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc113ff725893%3A0x2981a8b51a8d1fbd!2sUniversidad%20Nacional%20de%20Salta!5e0!3m2!1ses-419!2sar!4v1692562859156!5m2!1ses-419!2sar"
						width={640}
						height={340}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="rounded-lg"
					></iframe>
				</div>
			</div>
		</section>
	);
}
