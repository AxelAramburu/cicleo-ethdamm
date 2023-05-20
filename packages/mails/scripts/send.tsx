import { Resend } from "resend";
//const { Resend } = require("resend");
import * as React from "react";
import { render } from "@react-email/render";

import CicleoSub from "../emails/CicleoSub";
const resend = new Resend("re_QE579fBf_GY9Q12ZwiLBXPQGDqFzomrsv");

const emailHtml = render(<CicleoSub />);

resend.sendEmail({
    from: "onboarding@resend.dev",
    to: "santosdumont420@gmail.com",
    subject: "Hello World",
    // react: CicleoSub(),
    html: emailHtml,
});
