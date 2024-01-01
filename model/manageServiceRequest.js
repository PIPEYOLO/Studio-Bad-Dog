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

