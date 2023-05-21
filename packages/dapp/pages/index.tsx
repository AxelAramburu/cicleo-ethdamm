import Image from "next/image";
import Layout from "@components/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount, useContractRead } from "wagmi";
import { AdminFacet__factory } from "@context/Types";

const Home = () => {
	const reduceAddress = (address: string | undefined) => {
		if (address == null) return "";
		return address.slice(0, 6) + "..." + address.slice(address.length - 4);
	};

	const [paymentManagers, setPaymentManagers] = useState([]);

	const { address } = useAccount();

	console.log(address);

	const { data } = useContractRead({
		address: "0xA73a0d640d421e0800FDc041DA7bA954605E95D6",
		abi: AdminFacet__factory.abi,
		functionName: "getPaymentManagersByUser",
		//@ts-ignore
		args: [address],
	});

	console.log(data);

	return (
		<Layout>
			<div>
				<h2 className="flex pb-4 text-2xl">Payment Manager</h2>
				<Link href="/create" className="btn btn-primary w-fit">
					Create one
				</Link>
				<div className="flex flex-col justify-center gap-10 p-0 m-auto text-2xl align-center max-w-fit">
					<div className="">
						<h2 className="text-2xl text-center">
							Manage your payment manager(s)
						</h2>
						<div className="card-body">
							<div className="grid grid-cols-4 gap-8">
								{data != undefined &&
									data.map((data, index) => (
										<div
											className="flex flex-col col-span-1 gap-4 p-6 bg-black rounded-2xl"
											key={index}
										>
											<div className="grid grid-cols-2">
												<span className="py-2 text-3xl">{data.name}</span>
												<span className="py-2 text-3xl text-right">
													{data.symbol}
												</span>
											</div>

											<div className="flex justify-center pt-10">
												<Link
													href={`/manage/${index}`}
													className="px-16 btn btn-primary w-fit"
												>
													Manage
												</Link>
											</div>
										</div>
									))}
							</div>
						</div>
						<div className="flex justify-center w-full pt-5"></div>
					</div>
				</div>
				<div></div>
			</div>
		</Layout>
	);
};

export default Home;
