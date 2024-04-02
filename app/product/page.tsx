"use client";
import Card from "@/components/Card";

export default function Product() {
	return (
		<section className="">
			<h2 className="text-center text-5xl font-medium m-4">PRODUCTOS</h2>

			<div className="p-4 flex gap-8 justify-center flex-wrap">
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
}
