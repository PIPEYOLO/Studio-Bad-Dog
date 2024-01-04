import  {sendMail_gmail}  from "./manageMails.js";
import { ADMIN_EMAIL } from "../utilities.js";


class EmailNotificationRequiredError extends Error{
    constructor(message, description){
        super(message);
        if(this.constructor == EmailNotificationRequiredError){
            throw new Error("This is an Abstract Class");
        };
        this._stack = this.stack;
        this.description = description;
    }

    async noticeOwner() {
        sendMail_gmail({
            to : ADMIN_EMAIL,
            subject : "Error Occured",
            text : JSON.stringify(this)
        })
    }


}

export class ServerError extends EmailNotificationRequiredError {
    constructor (message, description, _stack) {
        super(message, description, _stack);
        this.type = "Server Error";
    }
}




// const error = new Error();
// console.log(error);
// console.log(error.constructor);
// console.log(error.name);
// console.log(error.stack);




















// import { sendMail_gmail } from "./manageServiceRequest";
// import crypto from "node:crypto";

// class MailError extends Error(msg){

// }


// class Persona{
    
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.seBaña = true;
//     };

//     static #secreto = "hola";

//     getDNI(){
//         return this.#dni;
//     }
//     saludar() {
//         return `${this.nombre} says hi!`
//     };

//     ciudad = "SMT"
//     #dni = (crypto.randomBytes(10)).toString("hex");

//     static getSecreto() {
//         return Persona.#secreto;
//     }
// }


// class Programador extends Persona{
    
//     constructor(nombre, lenguaje) {
//         super(nombre);
//         this.lenguaje = lenguaje;
//         this.seBaña = false;
//     }





    

// }


// const valentin = new Programador("Valentin", "C");
// const hilario = new Persona("Hilario");
// // const copyVale = Object.assign({}, valentin);
// // console.log(hilario);
// // console.log((hilario.getDNI));
// // hilario.setDNI = "caca";

// // console.log(hilario.getDNI())


// console.log(valentin);
// // console.log(copyVale)
// console.log("DNI va: ",valentin.getDNI());
// // console.log("DNI co: ", copyVale.saludar);
// // console.log(valentin.saludar.#hola = "Soy un mapa");
// // console.log(valentin.saludar.hola)





