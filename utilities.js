import * as url from 'url';

import path from "node:path";
import dotenv from "dotenv";
import process from 'process';
import fs from "node:fs";




// function get__fileName(){
//     return url.fileURLToPath(import.meta.url);
// }
// function get__dirname(){
//     return url.fileURLToPath(new URL('.', import.meta.url));
// }

const PROYECT_DIR = url.fileURLToPath(new URL('.', import.meta.url)); 
console.log(dotenv.config({path : path.join(PROYECT_DIR, "./.env")}));
// console.log(fs.readFileSync(path.join(PROYECT_DIR , "/.env",), "utf-8"));
// console.log("proyect-dir", PROYECT_DIR);

// console.log("views dir path", process.env.VIEWS_DIR_PATH);
// console.log(dotenv.config());
// console.log(process.env)
const VIEWS_FOLDER = path.join(PROYECT_DIR, process.env.VIEWS_DIR_PATH);
const PUBLIC_FOLDER = path.join(PROYECT_DIR, process.env.PUBLIC_DIR_PATH);
const PUBLIC_FOLDER_REL = process.env.PUBLIC_DIR_PATH;

// console.log(VIEWS_FOLDER);




export default {
    // get__dirname,
    // get__fileName,
    PROYECT_DIR,
    VIEWS_FOLDER,
    PUBLIC_FOLDER,
    PUBLIC_FOLDER_REL
}