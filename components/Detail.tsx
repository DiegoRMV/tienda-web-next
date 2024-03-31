import React, { useState } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import product from "@/assets/images/producto_ejemplo.jpg";
import Image from "next/image";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

export default function Detail() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [cant, setCant] = useState(0);

	const toggleSum = () => {
		setCant(cant + 1);
	};
	const toggleRes = () => {
		if (cant > 0) setCant(cant - 1);
	};

	return (
		<>
			<Button
				className="bg-purple p-2 rounded-xl w-32 text-md lg:text-lg text-white"
				onPress={onOpen}
			>
				Detail
			</Button>
			<Modal
				backdrop={"blur"}
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				size={"4xl"}
				placement="center"
				scrollBehavior={"inside"}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="modalLabel">
										Product
									</h1>
								</div>
							</ModalHeader>
							<ModalBody className="flex">
								<div className="flex flex-wrap justify-center gap-4">
									<div className="">
										<Image
											src={product}
											className=""
											alt=""
											width={300}
											height={400}
										/>
									</div>
									<div className="flex-1 flex flex-col">
										<h1 className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
											Title
										</h1>
										<div className="flex justify-between mb-4">
											<h1 className="text-4xl">$ 2000</h1>
											<div className="flex justify-center items-center">
												<p>12 dues $ 1000</p>
											</div>
										</div>
										<h2 className="text-xl mb-4">Description</h2>
										<p className="mb-4 grow">
											idunt laboriosam voluptatem, impedit commodi nesciunt
											nulla asperiores iusto architecto quos libero dolorem
											quaerat? Lorem ipsum dolor sit amet conse ctetur,
											adipisicing elit. Odio consequuntur sunt libero, voluptate
											similique minima voluptas ducimus? Placeat, debitis!
											Officiis magnam dolores expedita numquam ab porro,
											delectus quos cumque harum?
										</p>

										<div className="flex justify-between flex-col sm:flex-row mt-10 items-center">
											<div className="flex my-4 md:my-0">
												<Button
													radius="full"
													size="sm"
													color="danger"
													onPress={toggleRes}
													className="text-xl"
												>
													<BsCaretLeftFill className="text-white" />
												</Button>
												<div className="w-16 flex justify-center">
													<label className="text-lg">{cant}</label>
												</div>
												<Button
													radius="full"
													size="sm"
													color="success"
													onPress={toggleSum}
													className="text-xl"
												>
													<BsCaretRightFill className="text-white" />
												</Button>
											</div>
											<div className="flex gap-4">
												<Button
													color="default"
													onPress={onClose}
													className="text-md w-20"
												>
													Close
												</Button>
												<Button color="primary" className="text-md w-20">
													Buy
												</Button>
											</div>
										</div>
									</div>
								</div>
							</ModalBody>
							<ModalFooter></ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
