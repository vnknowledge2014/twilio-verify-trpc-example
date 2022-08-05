import { Twilio } from "twilio";
import { InputCheckVerifyCode } from "../../types";

const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`;
const serviceSid = `${process.env.TWILIO_SERVICE_SID}`;
const apiSecret = `${process.env.TWILIO_AUTH_API_SECRET_KEY}`;
const apiKey = `${process.env.TWILIO_AUTH_API_KEY}`;

const twilio = new Twilio(apiKey, apiSecret, { accountSid: accountSid });

export const generateVerifyCode = async (mobile: string) => {
    return await twilio.verify.v2.services(serviceSid)
        .verifications
        .create({ to: mobile, channel: 'sms' });
}

export const checkVerifyCode = async ({mobile, code}: InputCheckVerifyCode) => {
    return await twilio.verify.v2.services(serviceSid)
        .verificationChecks
        .create({ to: mobile, code });
}