import React, { useState, FC, useEffect } from "react";
import { BigNumber, Signer, ethers, providers } from "ethers";
import "./PaymentButton.css";
import TextWhite from "@assets/logo_text_white.svg";
import PayImage from "@assets/pay.svg";
import { reduceAddress, openOceanIface } from "@context/contract";
import {
	SelectNetwork,
	Login,
	SelectCoin,
	HeaderSubscriptionInfo,
	Payment,
} from "./components";
import {
    PaymentFacet__factory,
    BridgeCallerFacet__factory
 } from "@context/Types";

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

interface FunctionStep {
	1: (isInfinityToken: boolean, tokenApproval: number) => Promise<void>;
	2: () => Promise<void>;
}

const PaymentButton: FC<PaymentButton> = ({
	chainId,
	paymentManagerId,
	price,
	name,
}) => {
	const [account, setAccount] = useState<string | null>(null);
	const [isBridged, setIsBridged] = useState(false);
	const [networkSelected, setNetworkSelected] = useState(false);
	const [coinLists, setCoinLists] = useState([]);
	const [coin, setCoin] = useState<coin>({} as coin);
	const [paymentManagerInfo, setPaymentManagerInfo] = useState<any>(undefined);

	const [step, setStep] = useState(0);
	const [stepFunction, setStepFunction] = useState<FunctionStep>(
		{} as FunctionStep
	);
	const [isPurchased, setIsPurchased] = useState(false);
	const [swapData, setSwapData] = useState<any>(null);
	const [paymentInfoIsFetched, setPaymentInfoIsFetched] = useState(false);
	const [handleEmail, setHandleEmail] = useState(false);
	const [userMail, setUserMail] = useState("");

	const [errorMessage, setErrorMessage] = useState("");
	const [loadingStep, setLoadingStep] = useState(0);
	const [isInfinityToken, setIsInfinityToken] = useState(true);
	const [approvalToken, setApprovalToken] = useState(0);

	const [isLoaded, setIsLoaded] = useState(false);
	const [arrowStep, setArrowStep] = useState(0);

	const changeToken = async (coin: any) => {
		setIsLoaded(true);
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

		const approval = await readContract({
			...erc20Contract,
			functionName: "allowance",
			// @ts-ignore
			args: [account, "0xA73a0d640d421e0800FDc041DA7bA954605E95D6"],
		});

		console.log(approval);

		let _coin = coin;

		_coin.balance = Number(
			ethers.utils.formatUnits(balance, coin.decimals).toString()
		);

		setCoin(_coin);

		setIsLoaded(true);

		const destToken = paymentManagerInfo[0][1].toLowerCase();
		const destTokenDecimals = paymentManagerInfo[1];
		const destTokenSymbol = paymentManagerInfo[2];

		let _stepFunction = {
			1: async (
				isInfinityToken: boolean,
				tokenApproval: number,
				swapData: any
			) => {
				let _approval = ethers.utils.parseUnits(
					tokenApproval.toString(),
					swapData.inToken.decimals
				);

				if (isInfinityToken) {
					_approval = ethers.constants.MaxUint256;
				}

				const approval = await prepareWriteContract({
					...erc20Contract,
					functionName: "approve",
					args: ["0xA73a0d640d421e0800FDc041DA7bA954605E95D6", _approval],
				});

				setLoadingStep(1);

				const tx = await writeContract(approval);

				await tx.wait();

				setLoadingStep(0);
				setStep(2);
			},
			2: async () => {},
		};

            const nonce = await axios.get(`https://cicleo-ethdamm-dapp.vercel.app/chain/${chainId}/getNonce/${account}`);

            _stepFunction[2] = async () => {
                try {
                    if (account == null) return;
                    const message = ethers.utils.toUtf8Bytes('Cicleo Bridged Payments\n\n'
                        + 'Chain: ' + chainId + '\n'
                        + 'User: ' + account.toLowerCase() + '\n'
                        + 'Payment Manager: ' + paymentManagerId + '\n'
                        + 'Name: ' + name + '\n'
                        + 'Price: ' + price.toString() + '\n'
                        + 'Nonce: ' + nonce.data )
                    
                    console.log(ethers.utils.keccak256(message))

			_stepFunction[2] = async () => {
				try {
					if (account == null) return;
					const message = ethers.utils.toUtf8Bytes(
						"Cicleo Bridged Payments\n\n" +
							"Chain: " +
							chainId +
							"\n" +
							"User: " +
							account.toLowerCase() +
							"\n" +
							"Payment Manager: " +
							paymentManagerId +
							"\n" +
							"Subscription: " +
							subscriptionId +
							"\n" +
							"Price: " +
							subscription.originalUserPrice.toString() +
							"\n" +
							"Nonce: " +
							0
					);

					console.log(ethers.utils.keccak256(message));

                    const { v, r, s } = ethers.utils.splitSignature(signature)
                    const adjustedV = _adjustV(v)
                    signature = ethers.utils.joinSignature({ r, s, v: adjustedV }) as any
                    
                    console.log('Sign')
                    console.log(signature)
                    //console.log(coin._stargateData)

					function _adjustV(v: number): number {
						if (v === 0) {
							return 27;
						} else if (v === 1) {
							return 28;
						} else {
							return v;
						}
					}

					const { v, r, s } = ethers.utils.splitSignature(signature);
					const adjustedV = _adjustV(v);
					signature = ethers.utils.joinSignature({ r, s, v: adjustedV }) as any;

                    const signer = await fetchSigner()
        
                    const _bridge = getContract({ address: "0xA73a0d640d421e0800FDc041DA7bA954605E95D6", abi: BridgeCallerFacet__factory.abi, signerOrProvider: signer as Signer })

                    const tx = await _bridge.payWithCicleoWithBridge(
                        //@ts-ignore
                        [
                            chainId,
                            paymentManagerId,
                            price,
                            name,
                            coin.id
                        ],
                        coin._bridgeData,
                        coin._swapData,
                        starGate,
                        signature,
                        { value: nativePrice }
                    )
            
                    setLoadingStep(3);

					let starGate: any = coin._stargateData;
					starGate[3] = nativePrice.toString() as any;

					const signer = await fetchSigner();

					const _bridge = getContract({
						address: bridge,
						abi: CicleoSubscriptionBridgeManager__factory.abi,
						signerOrProvider: signer as Signer,
					});

					const tx = await _bridge.payFunctionWithBridge(
						//@ts-ignore
						[
							BigNumber.from(chainId),
							BigNumber.from(subManagerId),
							subscriptionId,
							subscription.originalUserPrice.toString(),
							coin.id,
						],
						coin._bridgeData,
						coin._swapData,
						starGate,
						referral != undefined ? referral : ethers.constants.AddressZero,
						subManager.duration,
						signature,
						{ value: nativePrice }
					);

					setLoadingStep(3);

					const transac = await tx.wait();

					console.log(transac);

					setErrorMessage("");
					setIsPurchased(true);
				} catch (error: any) {
					console.log(error);

					if (error.data && error.data.message) {
						return setErrorMessage(error.data.message);
					}
					if (error.message) {
						return setErrorMessage(error.message);
					}

					return;
				}
			};
		} else {
			//If a swap is needed
			if (destToken != coin.id.toLowerCase()) {
				let data = JSON.stringify({
					tokenIn: coin.id,
					price: price.toString(),
				});

				let config = {
					method: "post",
					maxBodyLength: Infinity,
					url: `https://cicleo-ethdamm-dapp.vercel.app/chain/${chainId}/getExactPrice/${paymentManagerId}`,
					headers: {
						"Content-Type": "application/json",
					},
					data: data,
				};

				const resp = await axios(config);

				console.log(resp.data);

				setSwapData(resp.data);

				let decodedData = openOceanIface.parseTransaction({
					data: resp.data.data,
					value: resp.data.value,
				});

				console.log("decodeddata");
				console.log(decodedData);

				_stepFunction[2] = async () => {
					const pay = await prepareWriteContract({
						address: "0xA73a0d640d421e0800FDc041DA7bA954605E95D6",
						abi: PaymentFacet__factory.abi,
						functionName: "payWithCicleoWithSwap",
						args: [
							//@ts-ignore
							paymentManagerId,
							price,
							name,
							decodedData.args.caller,
							decodedData.args.desc,
							decodedData.args.calls,
						],
					});

					setLoadingStep(2);

					try {
						const tx = await writeContract(pay);

						console.log(tx);

						await tx.wait();

						setIsPurchased(true);
					} catch (error: any) {
						setErrorMessage(error.message);
					}
				};
			} else {
				setSwapData({
					inToken: {
						address: destToken,
						symbol: destTokenSymbol,
						decimals: destTokenDecimals,
					},
					inAmount: price.toString(),
					outToken: {
						address: destToken,
						symbol: destTokenSymbol,
						decimals: destTokenDecimals,
					},
					outAmount: price.toString(),
				});

				_stepFunction[2] = async () => {
					const pay = await prepareWriteContract({
						address: "0xA73a0d640d421e0800FDc041DA7bA954605E95D6",
						abi: PaymentFacet__factory.abi,
						// @ts-ignore
						functionName: "payWithCicleo",
						args: [
							//@ts-ignore
							paymentManagerId,
							//@ts-ignore
							price.toString(),
							name,
						],
					});

					setLoadingStep(2);

					try {
						const tx = await writeContract(pay);

						console.log(tx);

						await tx.wait();

						setIsPurchased(true);
					} catch (error: any) {
						setErrorMessage(error.message);
					}
				};
			}
		}

		setStepFunction(_stepFunction as FunctionStep);

		let _step = 1;

		if (approval.gte(price)) {
			_step = 2;
		}

		setStep(_step);
	};

	const getUserTokenList = async () => {
		const { chain, chains } = getNetwork();
		if (!chain) return;
		const sourceChainId = chain.id;

		const account = getAccount();
		const address = account.address;

		if (!address) return;

		setIsLoaded(false);

		const userInfo = await axios.post(
			`https://cicleo-ethdamm-dapp.vercel.app/chain/${chainId}/getUserInfo/${paymentManagerId}/${address}/${sourceChainId}`,
			{ tokenOutAmount: price.toString() }
		);

		console.log(userInfo.data);

		setCoinLists(userInfo.data.coinList);
		setIsLoaded(true);
	};

	const getPaymentManagerInfo = async () => {
		const paymentManagerInfo = await axios.get(
			`https://cicleo-ethdamm-dapp.vercel.app/chain/${chainId}/getPaymentManagerInfo/${paymentManagerId}`
		);

		console.log(paymentManagerInfo.data);

		setPaymentManagerInfo(paymentManagerInfo.data);
	};

	const registerMail = (e: any) => {
		setUserMail(e.target.value);
	};
	const handleMailState = () => {
		setHandleEmail(true);
		setArrowStep(2);
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
				onChange={getPaymentManagerInfo}
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

					{paymentManagerInfo != undefined && (
						<HeaderSubscriptionInfo
							_chains={_chains}
							networkSelected={networkSelected}
							inToken={{
								image: coin.logo_url,
								symbol: coin.symbol,
								balance: coin.balance,
							}}
							price={ethers.utils.formatUnits(price, paymentManagerInfo[1])}
							name={name}
							handleBackToken={() => {
								setArrowStep(3);
								setCoin({} as coin);
							}}
							handleBackOnNetwork={() => {
								console.log("ejhe");
								setArrowStep(2);
								setNetworkSelected(false);
								// setCoinLists([]);
								setCoin({} as coin);
							}}
							handleBackMail={() => {
								setArrowStep(1);
								setHandleEmail(false);
							}}
							handleBackConnect={() => {
								console.log("ejei");
								setArrowStep(0);
								setAccount(null);
								setCoin({} as coin);
							}}
							arrowStep={arrowStep}
						/>
					)}

					{(() => {
						if (account == null)
							return (
								<Login
									setArrowStep={setArrowStep}
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
											value={userMail}
											onChange={registerMail}
										/>
									</div>
									<div className="cap-py-4">
										<button
											onClick={() => handleMailState()}
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
									setArrowStep={setArrowStep}
									handleSelectNetwork={async (_chainId: number) => {
										setNetworkSelected(true);
										setIsBridged(chainId != _chainId);
									}}
									_chains={_chains}
								/>
							);

						if (coin.id == undefined)
							return (
								<SelectCoin
									setArrowStep={setArrowStep}
									isLoaded={isLoaded}
									coinLists={coinLists}
									setCoin={changeToken}
								/>
							);

						if (isPurchased) {
							return (
								<div className="cap-p-4 cap-space-y-8">
									<h2 className="cap-text-xl cap-font-semibold">
										Thanks for your Payment!
									</h2>

									<div className="cap-shadow-lg cap-alert cap-alert-success">
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
													d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
											<div className="cap-flex cap-flex-col">
												<span>Your payment has been confirmed!</span>
												<span>You can close this page</span>
											</div>
										</div>
									</div>
								</div>
							);
						}

						return (
							<Payment
								tokenApproval={{
									isInfinity: isInfinityToken,
									setIsInfinity: setIsInfinityToken,
									setAmount: setApprovalToken,
									amount: approvalToken,
								}}
								loadingStep={loadingStep}
								step={step}
								errorMessage={errorMessage}
								stepFunction={stepFunction}
								setStep={setStep}
								isLoaded={isLoaded}
								swapData={swapData}
							/>
						);
					})()}
				</div>
			</div>
		</>
	);
};

export default PaymentButton;
