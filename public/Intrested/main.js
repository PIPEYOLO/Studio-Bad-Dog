


const form = document.getElementById("form");
const send_form = document.getElementById("send_form");


send_form.addEventListener("click", ev=>{
    ev.preventDefault();
    console.log(form);
    const formData = new FormData(form);
    const formInfo = {};


    for(let e of formData.entries()){
        let value = e[1];
        let key = e[0];
        console.log(key, value)
        if(!validateField(key=="comment" ? "a" : value, key== "email" ? true : false)){
            return document.getElementById(key).focus();


        };
        formInfo[key] = value;
        console.log(key, value);
    }
    

    manageFetch({
        url : `${origin}/request-service`,
        method : "POST", 
        headers: {
        "Content-Type" : "application/json"
        },
        body: formInfo,
        willRedirect : true
    })

    // fetch(`${origin}${"/request-service"}`, {
    //     method: "POST",
        // headers: {
        //     "Content-Type" : "application/json"
        // },
    //     body: JSON.stringify(formInfo)
    // })
    // .then(res=>res.text())
    // .then(res=>{
    //     console.log(res);
    // })
    // .catch(err=>{
    //     console.log(err) ;
    // })
    // fetch(`${location.}`)


})



function validateField(str, isEmail){
    if(typeof str != "string" || str.length == 0){
        return false;
    };
    if(isEmail && !str.includes("@")){
        return false;
    }
    return true;
}