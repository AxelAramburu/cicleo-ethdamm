import React, { FC } from "react";
import {
	connect,
	InjectedConnector,
	configureChains,
	createClient,
} from "@wagmi/core";
import { fantom, polygon } from "@wagmi/core/chains";
import { publicProvider } from "@wagmi/core/providers/public";
import { ClipLoader } from "react-spinners";

type Login = {
	handleSelectAccount: (account: string) => void;
	setArrowStep: (number: number) => void;
};

const Login: FC<Login> = ({ handleSelectAccount, setArrowStep }) => {
	const [isLoading, setIsLoading] = React.useState(false);

	const { chains, provider } = configureChains(
		[fantom, polygon],
		[publicProvider()]
	);

	const client = createClient({
		provider,
		connectors: [new InjectedConnector({ chains })],
	});

	const _handleSelectAccount = async () => {
		setIsLoading(true);

		console.log("efe");
		try {
			const result = await connect({
				connector: new InjectedConnector(),
			});

			console.log("dryd");

			console.log(result);

			if (result) {
				handleSelectAccount(result.account);
			}
			setArrowStep(1);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="cap-pb-10">
			<div className="cap-flex cap-flex-col cap-w-full cap-items-center cap-py-4">
				<h3 className="cap-text-lg cap-font-bold">Connect you first !</h3>
			</div>
			<div className="cap-flex cap-px-10 cap-items-center cap-justify-center">
				<button
					className="cap-btn cap-btn-primary cap-space-x-2 !cap-bg-primary !cap-text-white"
					onClick={_handleSelectAccount}
					disabled={isLoading}
				>
					<span>{isLoading ? "Waiting connection" : "Connect"}</span>
					{isLoading && <ClipLoader color="#fff" size={20} />}
				</button>
			</div>
		</div>
	);
};

export default Login;
