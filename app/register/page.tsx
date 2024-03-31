import Image from "next/image";
import imgRegister from "@/assets/images/register.jpg";

export default function Register() {
	return (
		<section className="flex items-center justify-center px-2 md:px-10">
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="bg-yellow text-black">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center py-2">
						Bienvenido
					</h1>
					<form id="register-form" className="flex flex-col p-4">
						<label htmlFor="name" className="font-semibold text-sm lg:text-base mb-1">
							Nombre y Apellido
						</label>
						<input
							type="text"
							name="name"
							className="mb-2 rounded-lg"
							id="name"
							placeholder="Leonel Messi"
							required
							minLength={3}
							maxLength={70}
						/>

						<label htmlFor="email" className="font-semibold text-sm lg:text-base mb-1">
							Email
						</label>
						<input
							type="email"
							className="mb-2 rounded-lg"
							id="email"
							aria-describedby="emailHelp"
							placeholder="example@example.com"
							minLength={3}
							maxLength={70}
							required
						/>

						<label htmlFor="password" className="font-semibold text-sm lg:text-base mb-1">
							Contraseña
						</label>
						<input
							type="password"
							className="mb-2 rounded-lg"
							id="password"
							minLength={3}
							maxLength={70}
							required
						/>

						<label htmlFor="passwordConfirmed" className="font-semibold text-sm lg:text-base mb-1">
							Repetir Contraseña
						</label>
						<input
							type="password"
							className="mb-2 rounded-lg"
							id="passwordConfirmed"
							minLength={3}
							maxLength={70}
							required
						/>

						<div className="flex items-center mb-2">
							<input
								className="mr-2 rounded text-black w-3 h-3 lg:w-4 lg:h-4"
								type="checkbox"
								value=""
								id="invalidCheck"
								required
							/>
							<label className="font-semibold text-xs lg:text-sm" htmlFor="invalidCheck">
								Aceptar condiciones
							</label>
						</div>

						<button className="font-semibold text-white mb-2 border-2 rounded-lg p-1 hover:bg-white hover:text-black text-sm lg:text-base xl:text-lg" type="submit">
							Registrarse
						</button>
					</form>
				</div>
				<div className="flex">
					<Image
						src={imgRegister}
						className=""
						alt=""
						width={800}
					/>
				</div>
			</div>
		</section>
	);
}
