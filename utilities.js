import * as url from 'url';

import path from "node:path";
import dotenv from "dotenv";
import process from 'process';
import fs from "node:fs";
import operativeSysyem from "node:os";
import domainNameServer from "node:dns";


export const os = operativeSysyem;
export const dns = domainNameServer;


export const origin = dns.getServers()[0];
export const PROYECT_DIR = url.fileURLToPath(new URL('.', import.meta.url)); 
console.log(dotenv.config({path : path.join(PROYECT_DIR, "./.env")}));

export const VIEWS_FOLDER = path.join(PROYECT_DIR, process.env.VIEWS_DIR_PATH);
export const PUBLIC_FOLDER = path.join(PROYECT_DIR, process.env.PUBLIC_DIR_PATH);
export const PUBLIC_FOLDER_REL = process.env.PUBLIC_DIR_PATH;

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_EMAIL_ID = ADMIN_EMAIL.slice(0, ADMIN_EMAIL.indexOf("@"));
// export const GOOGLE_OAUTH = JSON.parse(
//     fs.readFileSync(
//         path.join(PROYECT_DIR, process.env.GOOGLE_AUTH_FILE_PATH)
//     )
// ).web;
export const GOOGLE_ACCOUNT_TRANSPORT = JSON.parse(
    fs.readFileSync(
        path.join(PROYECT_DIR, process.env.GOOGLE_ACCOUNT_TRANSPORT_FILE_PATH)
    )
);

// console.log(VIEWS_FOLDER);




// export default {
//     // get__dirname,
//     // get__fileName,
//     PROYECT_DIR,
//     VIEWS_FOLDER,
//     PUBLIC_FOLDER,
//     PUBLIC_FOLDER_REL,
//     ADMIN_EMAIL,
//     ADMIN_EMAIL_ID,
//     // GMAIL_API_KEY,
//     // GOOGLE_OAUTH
    
// }