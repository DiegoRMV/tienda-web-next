import Link from "next/link";

export default function Login() {
	return (
		<section className="flex items-center justify-center md:px-0 px-4">
			<form
				id="login"
				className="bg-black p-10 rounded-3xl w-full md:w-2/3 lg:w-1/2"
			>
				<h1 className="text-center text-3xl lg:text-4xl xl:text-5xl p-4 font-bold">Login</h1>
				<div className="flex flex-col">
					<label htmlFor="email" className="text-base lg:text-lg xl:text-xl py-2">
						Email
					</label>
					<input
						type="email"
						className="text-xl p-2 rounded-lg text-black"
						id="email"
						aria-describedby="emailHelp"
						required
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="password" className="text-base lg:text-lg xl:text-xl py-2">
						Contraseña
					</label>
					<input
						type="password"
						className="text-base lg:text-lg xl:text-xl p-2 rounded-lg text-black"
						id="password"
						required
					/>
				</div>
				<div className="flex items-center py-4">
					<input
						type="checkbox"
						className="mr-2 rounded w-4 h-4 text-cyan"
						id="check"
					/>
					<label className="text-base lg:text-lg xl:text-xl p-0 m-0" htmlFor="check">
						Recordar
					</label>
				</div>
				<button
					type="submit"
					className="w-full border-2 text-base lg:text-lg xl:text-xl p-2 rounded-full hover:bg-white hover:text-black"
				>
					Entrar
				</button>
				<div className="text-center pt-2 text-sm md:text-base lg:text-lg">
					<p>
						Already have an account?{" "}
						<Link href="/register" className="text-cyan hover:text-white">
							Sign In
						</Link>
					</p>
				</div>
			</form>
		</section>
	);
}
