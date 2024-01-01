


const form = document.getElementById("form");
const send_form = document.getElementById("send_form");


send_form.addEventListener("click", ev=>{
    ev.preventDefault();
    console.log(form);
    const formData = new FormData(form);
    const formInfo = {};

    formData.forEach((value, key) => {
        formInfo[key] = value;
        console.log(key, value);
    });

console.log(location);
    

    manageFetch({
        url : `${origin}/request-service`,
        method : "POST", 
        headers: {
        "Content-Type" : "application/json"
        },
        body: formInfo
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
