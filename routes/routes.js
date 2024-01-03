import express from "express";
// import dotenv from "dotenv";
import fs from "node:fs";
import path from "path";
import * as utilities from "../utilities.js";
import Model from "../model/mainModel.js";

console.log(Model)
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

const intrestedRouter = express.Router();
intrestedRouter.get("/", async (req, res)=>{
    console.log(req.headers);
    return res.status(200).contentType("text/html").send(
        fs.readFileSync(path.join(utilities.VIEWS_FOLDER, "intrested", "index.html"))
    );
});



const requestService = express.Router();
requestService.get("/", (req, res)=>{
    const data = {
        name : req.query.name ?? "",
        email : req.query.email ?? "",
        successfulRequest : req.query.successfulRequest ?? false,
        reason : req.query.reason
    };

    console.log(data);

    return res.render("request-service/index.ejs", data);
})

requestService.post("/", async (req, res)=>{

    // console.log(req.body);
    const {name, email, comment} = req.body;
    console.log("name",name, email, comment);
    let successfulRequest, reason;
    let managementInfo; 
    try{
        managementInfo = await Model.manageServiceRequest({name, email, comment});
        successfulRequest = managementInfo.success;
        reason = managementInfo.info;
    }
    catch(err) {
        successfulRequest = false;
        reason = "Server Error";
    }

    console.log(managementInfo);
    return res.status(302).contentType("application/json").send({
        redirectionInfo : `${req.path_}?name=${name}&email=${email}&successfulRequest=${successfulRequest}&reason=${reason}`
    })
    // res.redirect("/request-service");
})



export default {
    staticRouter,
    homeRouter,
    sitesRouter,
    clientsRouter,
    startNowRouter,
    intrestedRouter,
    requestService
}

