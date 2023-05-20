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
import { Footer } from "./Footer";

export const CicleoPreSub = () => {
    return (
        <Html>
            <Head />
            <Preview>Your subscription is pending...</Preview>
            <Tailwind>
                <Body style={main} className="h-fit">
                    <Container style={container} className="drop-shadow-2xl">
                        <Section style={logo}>
                            <Img
                                width={150}
                                src="https://cicleo.io/images/logo_with_text_white.png"
                            />
                        </Section>
                        <Section style={sectionsBorders}>
                            <Row>
                                <Column style={sectionBorder} />
                                <Column style={sectionCenter} />
                                <Column style={sectionBorder} />
                            </Row>
                        </Section>
                        <Section style={content}>
                            <Text className="text-white font-normal text-base">
                                Thank You !
                            </Text>
                            <Section className="flex justify-center items-center py-2">
                                <Img
                                    width={50}
                                    src="https://mails.cicleo.io/static/pending.png"
                                />
                            </Section>
                            <Text style={paragraph}>
                                Your subscription is pending !
                            </Text>
                            <Text style={paragraph}>
                                The operation may take a few minutes, you
                                receive a confirmation email when the operation
                                has been completed.
                            </Text>
                            <Text style={paragraph}>
                                However if you did NOT perform this
                                subscription, please do not pay attention to
                                this mail.
                            </Text>
                            <Text style={paragraph}>
                                If you don't receive mail of confirmation in the
                                next ~ 10 minutes, the subscription probably
                                failed, you can retry or contact the team on{" "}
                                <Link href="https://discord.com/invite/tezcMjWdN2">
                                    Discord
                                </Link>
                                .
                            </Text>
                            <Text style={paragraph}>
                                Thank you for choosing Cicleo as your trusted
                                crypto partner. We look forward to serving you.
                            </Text>
                            <Text style={paragraph}>
                                Thanks,
                                <br />
                                Cicleo Team
                            </Text>
                        </Section>
                        <Section style={sectionsBorders}>
                            <Row>
                                <Column style={sectionBorder} />
                                <Column style={sectionCenter} />
                                <Column style={sectionBorder} />
                            </Row>
                        </Section>
                    </Container>
                    <Footer></Footer>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default CicleoPreSub;

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
