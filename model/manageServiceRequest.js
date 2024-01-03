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

updateAccessToken();
setInterval(updateAccessToken, 3500000);

// console.log(url);
const sendMail_gmail = async ({from, to, subject, text})=> {
    console.log(GOOGLE_ACCOUNT_TRANSPORT);
    const transport = nodemailer.createTransport(GOOGLE_ACCOUNT_TRANSPORT);

    const mailOptions = {
        from,
        to,
        subject,
        text
    }

    const result = await transport.sendMail(mailOptions);
    return result;

};





const validateUserInput = ({name, email, comment = ""}) => {
    console.log(name)
    if(typeof name != "string" || typeof email != "string" || name.length == 0 || email.length == 0 || !email.includes("@")){
        return {
            success : false,
            info : "Invalid user or email"
        };
    };

    return {
        success : true
    };

}



// // const getProfile_gmail = async (id) => {
// //     fetch(`https://gmail.googleapis.com/gmail/v1/users/${id}/profile?key=${utilities.GOOGLE_OAUTH.web.client_id}`, {method : "GET"})
// //     .then(res=>{
// //         console.log(res);
// //         return res.json()
// //     })
// //     .then(res=>{
// //         console.log(res);
// //     })
// //     .catch(err=>{
// //         console.log(err);
// //     })

// // }

// getProfile_gmail(utilities.ADMIN_EMAIL_ID);

export const manageServiceRequest = async ({name, email, comment})=>{
    let inputValidation = validateUserInput({name, email, comment});
    console.log(inputValidation)
    if(!inputValidation.success){
        return inputValidation;
    }
    // enviar email

    return {
        success : true
    }


}

