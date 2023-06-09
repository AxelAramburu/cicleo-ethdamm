import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { PaymentButton } from "..";


export const Page: React.FC = () => {
	return (
		<div>
			<PaymentButton
				chainId={250}
				paymentManagerId={1}
				price={ethers.utils.parseUnits("1", 6)}
				name="Payment1"
			/>
		</div>
	);
};
