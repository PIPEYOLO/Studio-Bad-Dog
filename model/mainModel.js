
import {ServerError} from "./manageErrors.js";

import { sendMail_gmail } from "./manageMails.js";
import * as utilities from "../utilities.js";

const validateUserInput = ({name, email}) => {
    // console.log(name)
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

// console.log(utilities.dns.getServers());
// console.log(utilities.os.networkInterfaces())
// console.log(utilities.os.hostname());









export const manageServiceRequest = async ({name, email, comment})=>{
    let inputValidation = validateUserInput({name, email});
    // console.log(inputValidation)
    if(!inputValidation.success){
        return inputValidation;
    }
    
    // Mail to Owner:
    sendMail_gmail({from:undefined, to:utilities.ADMIN_EMAIL, subject : "Nuevo Cliente!", 
        text : `
             name: ${name}, email: ${email}, comment : ${comment} 
    `});

    // Mail to client:
    let successfulMail = await sendMail_gmail({from:undefined, to:email, subject : "Received Service Request!!", 
        text : `
            Studio Bad Dog says:
            Hello ${name}
            We have just received your petition, please be patient till we answer. Have a good day!
        `
    })
    // console.log("good mail", successfulMail);

    if(!successfulMail.success){        
        const se = new ServerError("Server Error", `Could not send email to client!`, `reason`);
        console.log("se", se);
        se.noticeOwner();
        
        return {
            success : false,
            reason : successfulMail.reason
        }
    }
    
    return {
        
        success : true
    }


}



// export default {
//     manageServiceRequest,


// }


