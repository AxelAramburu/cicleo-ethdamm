import React, { useState, FC, useEffect } from "react";
import { BigNumber, Signer, ethers, providers } from "ethers";
import "./PaymentButton.css";
import TextWhite from "@assets/logo_text_white.svg";
import PayImage from "@assets/pay.svg";
import { reduceAddress } from "@context/contract";
import {
	SelectNetwork,
	Login,
	SelectCoin,
	HeaderSubscriptionInfo,
} from "./components";

import axios from "axios";
import {
	getNetwork,
	fetchSigner,
	getContract,
	readContract,
	erc20ABI,
	readContracts,
	signMessage,
	prepareWriteContract,
	writeContract,
	getAccount,
} from "@wagmi/core";

type PaymentButton = {
	paymentManagerId: number;
	chainId: number;
	price: BigNumber;
	name: string;
};

type PaymentInfo = {
	id: number;
	address: string;
	name: string;
	owner: string;
	decimals: number;
	tokenAddress: string;
	treasury: string;
	tokenSymbol: string;
	allowance: BigNumber;
	duration: number;
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
	chainId,
	paymentManagerId,
	price,
	name,
}) => {
	const [account, setAccount] = useState<string | null>(null);
	const [isBridged, setIsBridged] = useState(false);
	const [networkSelected, setNetworkSelected] = useState(false);
	const [coinSelected, setcoinSelected] = useState(false);
	const [coinLists, setCoinLists] = useState([]);
	const [coin, setCoin] = useState<coin>({} as coin);
	const [paymentInfoIsFetched, setPaymentInfoIsFetched] = useState(false);
	const [handleEmail, setHandleEmail] = useState(false);

	const [isLoaded, setIsLoaded] = useState(false);

	const changeToken = async (coin: any) => {
		if (!account) return;

		const erc20Contract = {
			address: coin.id,
			abi: erc20ABI,
		};

		const balance = await readContract({
			...erc20Contract,
			functionName: "balanceOf",
			// @ts-ignore
			args: [account],
		});

		let _coin = coin;

		_coin.balance = Number(
			ethers.utils.formatUnits(balance, coin.decimals).toString()
		);

		setCoin(_coin);
	};

	const getUserTokenList = async () => {
		const { chain, chains } = getNetwork();
		if (!chain) return;
		const sourceChainId = chain.id;

		const account = getAccount();
		const address = account.address;

		if (!address) return;

		const userInfo = await axios.post(
			`https://cicleo-ethdamm-dapp.vercel.app/chain/${sourceChainId}/getUserInfo/${paymentManagerId}/${address}/${sourceChainId}`,
			{ tokenOutAmount: price.toString() }
		);

		setCoinLists(userInfo.data.coinList);
		setIsLoaded(true);
	};

	useEffect(() => {
		getUserTokenList();
		//createContracts();
	}, [networkSelected]);

	return (
		<>
			<label
				htmlFor={"cicleo-payment-modal-" + paymentManagerId}
				className="cap-btn cap-btn-primary cap-max-w-[200px] cap-flex cap-justify-center "
			>
				<div className="cap-flex cap-items-center cap-text cap-justify-center cap-text-white cap-w-full cap-space-x-2">
					<img src={PayImage} alt="" className="cap-max-w-[90px]" />
				</div>
			</label>

			<input
				type="checkbox"
				id={"cicleo-payment-modal-" + paymentManagerId}
				className="cap-modal-toggle"
			/>
			<div className="cap-modal cap-modal-bottom sm:cap-modal-middle !cap-ml-0">
				<div className="cap-modal-box cap-relative cap-p-0 cap-text-white">
					<div className="cap-p-6 cap-bg-base-300 cap-flex cap-justify-between cap-items-center">
						<img src={TextWhite} alt="" className="cap-h-10" />
						<span className="cap-mr-8">{reduceAddress(account || "")}</span>
					</div>
					<div></div>
					<label
						htmlFor={"cicleo-payment-modal-" + paymentManagerId}
						className="cap-absolute cap-btn cap-btn-sm cap-btn-circle cap-right-2 cap-top-2"
					>
						✕
					</label>

					<HeaderSubscriptionInfo
						paymentInfoIsFetched={paymentInfoIsFetched}
						_chains={_chains}
						networkSelected={networkSelected}
						inToken={{
							image: coin.logo_url,
							symbol: coin.symbol,
							balance: coin.balance,
						}}
						price={price.toString()}
						name={name}
					/>

					{(() => {
						if (account == null)
							return (
								<Login
									handleSelectAccount={(address) => {
										setAccount(address);
									}}
								/>
							);
						if (!handleEmail)
							return (
								<div className="cap-pt-4 cap-pb-6 cap-flex cap-flex-col cap-justify-center cap-align-center cap-items-center">
									<div className="cap-flex cap-flex-col cap-justify-center cap-w-full cap-items-center cap-py-4">
										<h3 className="cap-text-lg cap-font-bold">
											Enter your mail
										</h3>
									</div>
									<div className="cap-rounded-xl">
										<input
											type="email"
											placeholder="example@example.com"
											className="cap-input cap-input-bordered cap-w-full cap-max-w-xs"
										/>
									</div>
									<div className="cap-py-4">
										<button
											onClick={() => setHandleEmail(true)}
											className="cap-btn cap-btn-primary cap-space-x-2 !cap-bg-primary !cap-text-white"
										>
											<span>Continue</span>
										</button>
									</div>
								</div>
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

						if (!coinSelected)
							return (
								<SelectCoin
									isLoaded={isLoaded}
									coinLists={coinLists}
									setCoin={changeToken}
								/>
							);

						return <></>;
					})()}
				</div>
			</div>
		</>
	);
};

export default PaymentButton;
