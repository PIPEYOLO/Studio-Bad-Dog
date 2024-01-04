import { google } from "googleapis";
import nodemailer from "nodemailer";
import * as utilities from "../utilities.js";

const {GOOGLE_ACCOUNT_TRANSPORT} = utilities;


const getAccessToken = async () => {
    return new Promise((resolve, reject) => {
        const oAuthClient = new google.auth.OAuth2(
            GOOGLE_ACCOUNT_TRANSPORT.auth.client_id,
            GOOGLE_ACCOUNT_TRANSPORT.auth.client_secret,
            GOOGLE_ACCOUNT_TRANSPORT.auth.redirect_uris
        );
        oAuthClient.setCredentials({
            refresh_token: GOOGLE_ACCOUNT_TRANSPORT.auth.refresh_token,
            tls : {
                rejectUnauthorized : false
            }
        });

        oAuthClient.getAccessToken((err, token) => {
            if (err) {
                console.log(err);
                resolve ({
                    success : false,
                    reason : err
                })
            }
            resolve ({
                success : true,
                accessToken : token
            })
            // GOOGLE_ACCOUNT_TRANSPORT.auth.accessToken = token;


        })
    })



}

const updateAccessToken = async () => {
    let newTokenInfo = await getAccessToken();
    if(newTokenInfo.success){
        // console.log(GOOGLE_ACCOUNT_TRANSPORT);
        GOOGLE_ACCOUNT_TRANSPORT.auth.accessToken = newTokenInfo.accessToken;
        // console.log(GOOGLE_ACCOUNT_TRANSPORT);
    }
    else {
        throw new Error(`Could not create a token!, ${newTokenInfo.reason}`);
    }

}

updateAccessToken().then(res=>{
    console.log("Actalizado: ", GOOGLE_ACCOUNT_TRANSPORT);
});
setInterval(updateAccessToken, 3500000);

// console.log(url);
export const sendMail_gmail = async ({from, to, subject, text})=> {
    // console.log(GOOGLE_ACCOUNT_TRANSPORT);
    const transport = nodemailer.createTransport(GOOGLE_ACCOUNT_TRANSPORT);

    const mailOptions = {
        from,
        to,
        subject,
        text
    }

    const result = await transport.sendMail(mailOptions);
    if(result.accepted[0] == to){
        return {
            success : true
        }
    }
    else {
        return {
            success : false,
            reason :"User did not receive the email"
        }
    }

};
