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
		address: "0x471e8591f720aD2fCc360081a60712F9f6138665",
		abi: AdminFacet__factory.abi,
		functionName: "getPaymentManagersByUser",
		//@ts-ignore
		args: [address],
	});

	console.log(data);

	return (
		<Layout>
			<div>
				<h2 className="text-2xl flex pb-4">Payment Manager</h2>
				<div className="text-2xl flex flex-col justify-center align-center gap-10 max-w-fit p-0 m-auto">
					<Link href="/create" className="btn btn-primary w-fit">
						Create one
					</Link>
					<div className="">
						<h2 className="text-2xl text-center">
							Manage your payment manager(s)
						</h2>
						<div className="card-body">
							<div className="grid grid-cols-4 gap-8">
								{data != undefined &&
									data.map((data, index) => (
										<div
											className="flex flex-col col-span-1 bg-black rounded-2xl p-6 gap-4"
											key={index}
										>
											<div className="grid grid-cols-2">
												<span className="text-3xl py-2">{data.name}</span>
												<span className="text-3xl py-2 text-right">
													{data.symbol}
												</span>
											</div>

											<div className="flex justify-center pt-10">
												<Link
													href={`/manage/${index}`}
													className="btn btn-primary w-fit px-16"
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
