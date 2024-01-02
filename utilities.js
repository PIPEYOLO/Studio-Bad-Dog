import * as url from 'url';

import path from "node:path";
import dotenv from "dotenv";
import process from 'process';
import fs from "node:fs";




const PROYECT_DIR = url.fileURLToPath(new URL('.', import.meta.url)); 
console.log(dotenv.config({path : path.join(PROYECT_DIR, "./.env")}));

const VIEWS_FOLDER = path.join(PROYECT_DIR, process.env.VIEWS_DIR_PATH);
const PUBLIC_FOLDER = path.join(PROYECT_DIR, process.env.PUBLIC_DIR_PATH);
const PUBLIC_FOLDER_REL = process.env.PUBLIC_DIR_PATH;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_EMAIL_ID = ADMIN_EMAIL.slice(0, ADMIN_EMAIL.indexOf("@"));
// const GMAIL_API_KEY = process.env.GMAIL_API_KEY;
// const GOOGLE_OAUTH = JSON.parse(process.env.GOOGLE_OAUTH);

// console.log(VIEWS_FOLDER);




export default {
    // get__dirname,
    // get__fileName,
    PROYECT_DIR,
    VIEWS_FOLDER,
    PUBLIC_FOLDER,
    PUBLIC_FOLDER_REL,
    ADMIN_EMAIL,
    ADMIN_EMAIL_ID,
    // GMAIL_API_KEY,
    // GOOGLE_OAUTH
    
}