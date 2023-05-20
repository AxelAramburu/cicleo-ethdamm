import {
	Body,
	Container,
	Column,
	Head,
	Html,
	Img,
	Link,
	Font,
	Preview,
	Row,
	Section,
	Text,
	Tailwind,
} from "@react-email/components";
import * as React from "react";
import { Footer } from "./Footer";
import { render } from "@react-email/render";

interface CicleoSubProps {
	paymentName: string;
	date: Date;
	userMail: string;
	userAddress: string;
	bridgeFee?: number;
	cicleoFee: number;
	price: number;
	totalPrice: number;
	network: string;
	tokenOut: string;
}

export const CicleoSub = (props: CicleoSubProps) => {
	return (
		<Html>
			<Head />
			<Preview>
				Congratulations! Your payment Pay1 {props.paymentName} is validated with
				Cicleo !
			</Preview>
			<Tailwind>
				<Body style={main} className="h-fit bg-[#ffffff] m-0 font-cicleo">
					<Container className=" bg-black min-w-[600px] place-content-center text-center justify-around grid-cols-1 drop-shadow-2xl border-[#eeeeee] border-t-[1px] m-[30px auto] rounded-xl text-white">
						<Img
							className="grid place-content-center m-auto p-8"
							width={150}
							src="https://cicleo.io/images/logo_with_text_white.png"
						/>
						<Section>
							<Row>
								<Column style={sectionBorder} />
								<Column style={sectionCenter} />
								<Column style={sectionBorder} />
							</Row>
						</Section>
						<Section className="p-10 ">
							<Row>
								<Column>
									<Text className="text-white font-normal text-base text-2xl font-cicleo">
										Thank You !
									</Text>
								</Column>
							</Row>

							<Row>
								<Column>
									<Img
										className="grid place-content-center m-auto py-4"
										width={50}
										src="https://mails.cicleo.io/static/validate.png"
									/>
								</Column>
							</Row>
							<Row>
								<Column>
									<Text style={paragraph}>
										Congratulations! Your payment Pay1 {props.paymentName} is
										validated with Cicleo !
									</Text>
								</Column>
							</Row>

							<Text style={paragraph}>
								However if you did NOT perform this payment, please do not pay
								attention to this mail.
							</Text>

							<Text style={paragraph}>
								Thank you for choosing Cicleo as your trusted crypto partner. We
								look forward to serving you.
							</Text>
							<Text className="text-xl">
								Thanks,
								<br />
								Cicleo Team
							</Text>
						</Section>
						<Section>
							<Row>
								<Column style={sectionBorder} />
								<Column style={sectionCenter} />
								<Column style={sectionBorder} />
							</Row>
						</Section>
						<Section>
							<Text className="m-0 text-2xl underline underline-offset-4 text-white pt-4">
								Receipt
							</Text>
							<Row className="my-6">
								<Column>
									<Text className="m-0 text-xl text-white pt-4 w-fit ml-[50px] text-left">
										21/05/2023
										{/* //ts-ignore */}
										{props.date?.toString()}
									</Text>
								</Column>
								<Column>
									<Text className="m-0 text-[12px] text-white text-right mr-[40%]">
										example@mail.com
										{props.userMail}
									</Text>
								</Column>
							</Row>
							<Row>
								<Column>
									<Text className="m-auto text-[12px] text-white leading-4 text-left ml-[20%] pb-2">
										Your Address : (0x5s4d564d45f5z4f4z8f448fz6845f4564
										{props.userAddress})
									</Text>
								</Column>
							</Row>
						</Section>
						<Section>
							<Row>
								<Column className="w-[50px]"></Column>
								<Column className="border-solid border-[1px] border-slate-800 w-[500px]"></Column>
								<Column className="w-[50px]"></Column>
							</Row>
						</Section>
						<Section>
							<Row>
								<Column className="py-6 text-white font-normal text-left">
									<Text className="m-0 text-2xl pb-4 text-left ml-[50px]">
										Pay1
										{props.paymentName}
									</Text>
								</Column>
							</Row>
							<Row>
								<Column>
									<Text className="m-0 text-lg text-left ml-[50px]">
										Bridge Fees
									</Text>
								</Column>
								<Column>
									<Text className="m-0 text-lg leading-6 text-right mr-[40px]">
										1.00 USDC
										{props.bridgeFee}
										{props.tokenOut}
									</Text>
								</Column>
							</Row>
							<Row>
								<Column>
									<Text className="m-0 text-lg text-left ml-[50px]">
										Cicleo Fees
									</Text>
								</Column>
								<Column>
									<Text className="m-0 text-lg leading-6 text-right mr-[40px]">
										1.00 USDC
										{props.cicleoFee}
										{props.tokenOut}
									</Text>
								</Column>
							</Row>
							<Row>
								<Column>
									<Text className="m-0 text-lg text-left ml-[50px]">Price</Text>
								</Column>
								<Column>
									<Text className="m-0 text-lg leading-6 text-right mr-[40px]">
										8.00 USDC
										{props.price}
										{props.tokenOut}
									</Text>
								</Column>
							</Row>
							<Row>
								<Column>
									<Text className="m-0 text-[12px] leading-3 pt-6">
										{props.network} Fantom Network
									</Text>
								</Column>
							</Row>
							<Row>
								<Column>
									{/* <Text className="m-0 text-[12px] leading-3">
										Swap {props.tokenIn} to {props.tokenOut}
									</Text> */}
									<Text className="m-0 text-[12px] leading-3">
										This transaction is not refundable
									</Text>
								</Column>
							</Row>
						</Section>
						<Section>
							<Row>
								<Column>
									<Text className="m-0 text-xl ppl-10 text-white text-left ml-[50px]">
										Total
									</Text>
								</Column>
								<Column className="px-2 py-6 text-left ">
									<Text className="m-0 text-xl text-right mr-[40px]">
										10.00 USDC
										{props.totalPrice}
										{props.tokenOut}
									</Text>
								</Column>
							</Row>
						</Section>
						<Footer />
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default CicleoSub;

const main = {
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
	fontSize: "16px",
	lineHeight: "1.4",
	fontWeight: 400,
	marginBottom: "30px",
	color: "#fff",
};

const footer = {
	width: "580px",
	margin: "0 auto",
};

const content = {
	padding: "5px 50px 10px 60px",
};

const sectionsBorders = {
	width: "100%",
	display: "flex",
};

const sectionBorder = {
	borderBottom: "1px solid rgb(238,238,238)",
	width: "249px",
};

const sectionCenter = {
	borderBottom: "1px solid rgb(5,97,255)",
	width: "102px",
};

const link = {
	textDecoration: "underline",
};

// const html = render(<CicleoSub />, {
// 	pretty: true,
// });
// // console.log(html);
