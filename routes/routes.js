import express from "express";
// import dotenv from "dotenv";
import fs from "node:fs";
import path from "path";
import utilities from "../utilities.js";

// dotenv.config();

console.log(utilities)
// console.log(utilities.get__fileName());

const staticRouter = express.static(utilities.PUBLIC_FOLDER);


const homeRouter = express.Router({caseSensitive : false});
homeRouter.get("/", async (req, res)=>{
    console.log(req.headers);
    return res.status(200).contentType("text/html").send(
        fs.readFileSync(path.join(utilities.VIEWS_FOLDER, "home", "index.html"))
    );
})


const sitesRouter = express.Router();
sitesRouter.get("/", async (req, res)=>{
    console.log(req.headers);
    return res.status(200).contentType("text/html").send(
        fs.readFileSync(path.join(utilities.VIEWS_FOLDER, "sites", "index.html"))
    );
});

const clientsRouter = express.Router();
clientsRouter.get("/", async (req, res)=>{
    console.log(req.headers);
    return res.status(200).contentType("text/html").send(
        fs.readFileSync(path.join(utilities.VIEWS_FOLDER, "clients", "index.html"))
    );
});

const startNowRouter = express.Router();
startNowRouter.get("/", async (req, res)=>{
    console.log(req.headers);
    return res.status(200).contentType("text/html").send(
        fs.readFileSync(path.join(utilities.VIEWS_FOLDER, "start-now", "index.html"))
    );
});


export default {
    staticRouter,
    homeRouter,
    sitesRouter,
    clientsRouter,
    startNowRouter
}

