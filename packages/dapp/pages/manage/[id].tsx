import Image from "next/image";
import Layout from "@components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { useNetwork, useContractWrite } from "wagmi";
import { PaymentManagerFacet__factory } from "@context/Types";
import { useAccount, useContractRead } from "wagmi";
import { AdminFacet__factory } from "@context/Types";

const Manage = () => {
	const router = useRouter();
	const { page, id } = router.query;

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

	const reduceAddress = (address: string | undefined) => {
		if (address == null) return "";
		return address.slice(0, 6) + "..." + address.slice(address.length - 4);
	};

	return (
		<Layout>
			<div className="space-y-4">
				<h2 className="text-2xl text-center">Manage your payment manager(s)</h2>
				<div className="card-body bg-base-100 rounded-2xl">
					<div className="flex gap-6">
						{data != undefined && (
							<>
								<div className="flex flex-col justify-center align-center  bg-black rounded-2xl p-10 w-fit">
									<h2 className="text-xl">Name</h2>
									{/* @ts-ignore */}
									<span className="py-2">{data[id].name}</span>
									<hr></hr>
									<h2 className="text-xl pt-4">Token</h2>
									{/* @ts-ignore */}
									<span className="p-2">{data[id].symbol}</span>
									<hr></hr>
									<h2 className="text-xl pt-4">Token Address</h2>
									<span className="p-2">
										{/* @ts-ignore */}
										{reduceAddress(data[id].paymentToken)}
									</span>
									<hr></hr>
									<h2 className="text-xl pt-4">Treasury Account</h2>
									<span className="p-2">
										{/* @ts-ignore */}
										{reduceAddress(data[id].treasuryAccount)}
									</span>
									<div className="pt-4 flex-col space-y-4">
										<button className="btn btn-primary w-full">Manage</button>
										<button className="btn btn-error w-full ">
											Delete Manager
										</button>
									</div>
								</div>
								{/* Tableau Logs */}
								<div className="w-screen">
									<div className="overflow-x-auto w-full rounded-2xl">
										<table className="table w-full">
											{/* head */}
											<thead>
												<tr>
													<th>
														<label>
															<input type="checkbox" className="checkbox" />
														</label>
													</th>
													<th>ID</th>
													<th>User Address</th>
													<th>Price</th>
												</tr>
											</thead>
											<tbody>
												{/* row 1 */}
												<tr>
													<th>
														<label>
															<input type="checkbox" className="checkbox" />
														</label>
													</th>
													<td>
														<div className="font-bold">0</div>
													</td>
													<td>
														<span className="">
															0xz3d9fs1cfke5c25f4e8d5s4z5z45d6f8
														</span>
													</td>
													<td>20,00$</td>
												</tr>
												{/* row 1 */}
												<tr>
													<th>
														<label>
															<input type="checkbox" className="checkbox" />
														</label>
													</th>
													<td>
														<div className="font-bold">1</div>
													</td>
													<td>
														<span className="">
															0xfke5c2z3d9f5z4s1c5f4e8d5s4z5d6f8
														</span>
													</td>
													<td>20,00$</td>
												</tr>
												{/* row 1 */}
												<tr>
													<th>
														<label>
															<input type="checkbox" className="checkbox" />
														</label>
													</th>
													<td>
														<div className="font-bold">2</div>
													</td>
													<td>
														<span className="">
															0xfke5c2z3d9f5z4s1c5f4e8d5s4z5d6f8
														</span>
													</td>
													<td>20,00$</td>
												</tr>
												{/* row 1 */}
												<tr>
													<th>
														<label>
															<input type="checkbox" className="checkbox" />
														</label>
													</th>
													<td>
														<div className="font-bold">3</div>
													</td>
													<td>
														<span className="">
															0xfke5c2z3d9f5z4s1c5f4e8d5s4z5d6f8
														</span>
													</td>
													<td>20,00$</td>
												</tr>
											</tbody>
											{/* //foot */}
											<tfoot className="text-2xl">
												<tr>
													<th></th>
													<th></th>
													<th className="text-right">Total</th>
													<th>40,00$</th>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
				<div className="flex justify-center w-full pt-5"></div>
			</div>
		</Layout>
	);
};

export default Manage;
