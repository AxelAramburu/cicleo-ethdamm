import {
    Body,
    Container,
    Column,
    Head,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

export const Footer = ({}) => {
    return (
        <Section className="p-6">
            <Row>
                <Column>
                    <Img
                        className="pl-[20px] "
                        width={150}
                        src="https://cicleo.io/images/logo_with_text_white.png"
                    ></Img>
                </Column>
                <Column>
                    <Column>
                        <Link href="https://discord.com/invite/tezcMjWdN2">
                            <Img
                                width={40}
                                src="https://mails.cicleo.io/static/discord.png"
                            ></Img>
                        </Link>
                    </Column>

                    <Column>
                        <Link href="https://twitter.com/CicleoPay">
                            <Img
                                width={40}
                                src="https://mails.cicleo.io/static/twitter.png"
                            ></Img>
                        </Link>
                    </Column>
                </Column>
            </Row>
            <Row>
                <Column>
                    <Text className="m-0 text-[12px] leading-3 ml-[35px] pb-10">
                        © 2023 Cicleo, All Rights Reserved
                    </Text>
                </Column>
            </Row>
        </Section>
    );
};

export default Footer;

const main = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    textAlign: "center",
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

const container = {
    width: "880px",
    margin: "30px auto",
    backgroundColor: "#12161B",
    border: "1px solid #eee",
    borderRadius: "15px",
    boxShadow: "0 5px 10px rgba(20,50,70,.2)",
};

const footer = {
    width: "580px",
    margin: "0 auto",
};

const content = {
    padding: "5px 50px 10px 60px",
};

const logo = {
    // backgroundColor: '#efeef1',
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
    padding: 30,
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
