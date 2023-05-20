import Image from "next/image";
import Layout from "@components/Layout";
import { useState } from "react";
import { useNetwork, useContractWrite } from "wagmi";
import { PaymentManagerFacet__factory } from "@context/Types";
const Manage = () => {
	return (
		<>
			<Layout>
				<div className="space-y-4">
					<h2 className="text-2xl text-center">
						Manage your payment manager(s)
					</h2>
					<div className="w-4/5 h-fit bg-orange-500"></div>
					<div className="flex justify-center w-full pt-5"></div>
				</div>
			</Layout>
		</>
	);
};

export default Manage;
