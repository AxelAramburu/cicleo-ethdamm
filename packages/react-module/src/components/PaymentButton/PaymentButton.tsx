import React, { useState, FC, useEffect } from "react";
import { BigNumber, Signer, ethers, providers } from "ethers";
import "./PaymentButton.css";
import TextWhite from "@assets/logo_text_white.svg";
import PayImage from "@assets/pay.svg";
import { reduceAddress } from "@context/contract";
import { SelectNetwork, Login } from "./components";

type PaymentButton = {
	subscriptionId: number;
	chainId: number;
	subManagerId: number;
	referral?: string;
};

type Network = {
	name: string;
	chainId: number;
	rpcUrls: string;
	image: string;
};

type coin = {
	logo_url: string;
	symbol: string;
	id: string;
	balance: number;
	decimals: number;
	toPay: string;
	_bridgeData: any[];
	_swapData: any[];
	_stargateData: any[];
	value: string;
};

let _chains: Network[] = [
	{
		name: "Fantom",
		chainId: 250,
		rpcUrls: "https://rpc.ftm.tools/",
		image: "https://cryptologos.cc/logos/fantom-ftm-logo.png?v=013",
	},
	{
		name: "Polygon",
		chainId: 137,
		rpcUrls: "https://rpc-mainnet.maticvigil.com/",
		image: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=013",
	},
	{
		name: "Avalanche",
		chainId: 43114,
		rpcUrls: "https://rpc.ankr.com/avalanche",
		image: "https://cryptologos.cc/logos/avalanche-avax-logo.png?v=025",
	},
	{
		name: "Optimism",
		chainId: 10,
		rpcUrls: "https://opt-mainnet.g.alchemy.com/v2/demo",
		image: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png?v=025",
	},
];

const PaymentButton: FC<PaymentButton> = ({
	subscriptionId,
	subManagerId,
	chainId,
	referral,
}) => {
	const [account, setAccount] = useState<string | null>(null);
	const [isBridged, setIsBridged] = useState(false);
	const [networkSelected, setNetworkSelected] = useState(false);

	useEffect(() => {
		//createContracts();
	}, [networkSelected]);

	return (
		<>
			<label
				htmlFor={"cicleo-payment-modal-" + subscriptionId}
				className="cap-btn cap-btn-primary cap-max-w-[200px] cap-flex cap-justify-center "
			>
				<div className="cap-flex cap-items-center cap-text cap-justify-center cap-text-white cap-w-full cap-space-x-2">
					<img src={PayImage} alt="" className="cap-max-w-[90px]" />
				</div>
			</label>

			<input
				type="checkbox"
				id={"cicleo-payment-modal-" + subscriptionId}
				className="cap-modal-toggle"
			/>
			<div className="cap-modal cap-modal-bottom sm:cap-modal-middle !cap-ml-0">
				<div className="cap-modal-box cap-relative cap-p-0 cap-text-white">
					<div className="cap-px-4 cap-py-3 cap-bg-base-300 cap-flex cap-justify-between cap-items-center">
						<img src={TextWhite} alt="" className="cap-h-10" />
						<span className="cap-mr-8">{reduceAddress(account || "")}</span>
					</div>
					<div></div>
					<label
						htmlFor={"cicleo-payment-modal-" + subscriptionId}
						className="cap-absolute cap-btn cap-btn-sm cap-btn-circle cap-right-2 cap-top-2"
					>
						✕
					</label>

					{(() => {
						if (account == null)
							return (
								<Login
									handleSelectAccount={(address) => {
										setAccount(address);
									}}
								/>
							);

						if (!networkSelected)
							return (
								<SelectNetwork
									handleSelectNetwork={async (chainId: number) =>
										setNetworkSelected(true)
									}
									_chains={_chains}
								/>
							);
					})()}
				</div>
			</div>
		</>
	);
};

export default PaymentButton;
