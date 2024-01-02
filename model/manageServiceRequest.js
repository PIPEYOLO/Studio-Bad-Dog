import utilities from "../utilities.js";


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

// validateUserInput({});
validateUserInput({name : "ele", "email": "ele@gmail.com"});

const sendMail_gmail = (a)=> a;

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

