import { BigNumber, utils } from "ethers";
import React, { FC } from "react";
import LoadingState from "../../LoadingState";
import { formatNumber } from "@context/contract";

type SelctCoin = {
	isLoaded: boolean;
	coinLists: any[];
	setCoin: (coin: string) => void;
};

const SelctCoin: FC<SelctCoin> = ({ isLoaded, coinLists, setCoin }) => {

	if (isLoaded == false)
		return <LoadingState text="Scanning your ERC20 coins..." />;

	if (coinLists.length == 0)
		return (
			<div className="cap-p-5">
				<div className="cap-shadow-lg cap-alert cap-alert-warning">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="cap-flex-shrink-0 cap-w-6 cap-h-6 cap-stroke-current"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
						<span>
							Unfortunally we detecting no ERC20 coin on your account, swap your
							native tokens to ERC20 tokens to continue
						</span>
					</div>
				</div>
			</div>
		);

	return (
		<>
			<div className="cap-pb-10">
				<div className="cap-flex cap-flex-col cap-w-full cap-items-center cap-py-4">
					<h3 className="cap-text-lg cap-font-bold">
						Select your token to pay
					</h3>
				</div>
				<div className="cap-grid cap-px-10 cap-grid-cols-4 cap-gap-4 cap-overflow-y-scroll">
					{coinLists.map((coin, index) => (
						<button
							className="cap-px-2 cap-bg-base-300 cap-rounded-xl cap-flex cap-flex-col cap-items-center cap-justify-center cap-py-4 cap-space-y-4"
							onClick={() => setCoin(coin)}
							key={index}
						>
							<img src={coin.logo_url} alt={coin.name} width={60} height={60} />

                            <span>{coin.name}</span>
                            <span>{formatNumber(Number(utils.formatUnits(coin.toPay, coin.decimals)), 2)} {coin.symbol}</span>
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default SelctCoin;
