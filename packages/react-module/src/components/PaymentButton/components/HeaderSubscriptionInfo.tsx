import React, { FC } from "react";
import TOKEN_IMG from "@assets/token.svg";
import BACK_ARROW_IMG from "@assets/back-arrow.svg";
import { formatNumber, reduceAddress } from "@context/contract";
import { getNetwork } from "@wagmi/core";

type Network = {
	name: string;
	chainId: number;
	rpcUrls: string;
	image: string;
};

type Coin = {
	symbol: string;
	image: string;
	balance: number;
};

type HeaderSubscriptionInfo = {
	inToken: Coin;
	_chains: Network[];
	networkSelected: boolean;
	price: string;
	name: string;
	handleBackToken: () => void;
	handleBackOnNetwork: () => void;
	handleBackConnect: () => void;
	handleBackMail: () => void;
	arrowStep: number;
};

type ArrowGetBack = {
	onClick: () => void;
};

const ArrowGetBack: FC<ArrowGetBack> = ({ onClick }) => {
	return (
		<>
			<button onClick={onClick}>
				<img src={BACK_ARROW_IMG} width={20} height={20} alt="Back arrow" />
			</button>
			<div className="cap-divider cap-divider-horizontal"></div>
		</>
	);
};

const HeaderSubscriptionInfo: FC<HeaderSubscriptionInfo> = ({
	inToken,
	_chains,
	networkSelected,
	price,
	name,
	handleBackToken,
	handleBackOnNetwork,
	handleBackMail,
	handleBackConnect,
	arrowStep,
}) => {
	const { chain, chains } = getNetwork();
	let paymentChainId = 0;
	let chainInfo = null;
	if (chain) {
		paymentChainId = chain.id;

		for (let i = 0; i < _chains.length; i++) {
			let _chainInfo = _chains[i];

			if (_chainInfo.chainId == paymentChainId) {
				chainInfo = _chainInfo;
			}
		}
	}

	return (
		<>
			<div className="cap-flex cap-p-6 cap-w-full cap-space-x-2 cap-gap-2 cap-items-center cap-justify-between cap-border-primary cap-text-xl">
				<div className="cap-flex cap-items-center cap-space-x-2">
					{(() => {
						if (arrowStep == 0) {
							return <></>;
						}

						if (arrowStep == 1)
							return <ArrowGetBack onClick={handleBackConnect} />;

						if (arrowStep == 2)
							return <ArrowGetBack onClick={() => handleBackMail()} />;

						if (arrowStep == 3)
							return <ArrowGetBack onClick={() => handleBackOnNetwork()} />;

						if (arrowStep == 4)
							return <ArrowGetBack onClick={handleBackToken} />;
					})()}
					{networkSelected == true && chainInfo != undefined && (
						<img
							src={chainInfo.image}
							alt="blockchain image"
							className="cap-h-fit !cap-mr-2"
							width={40}
							height={40}
						/>
					)}
					<h1>{name}</h1>
				</div>
				<div className="cap-flex cap-items-center cap-space-x-2">
					<h1>{price} USDC</h1>
				</div>
			</div>

			<div className="cap-divider cap-my-0"></div>
		</>
	);
};

export default HeaderSubscriptionInfo;
