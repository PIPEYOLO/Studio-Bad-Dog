
import express from "express";
import http from "http";
// import dotenv from "dotenv";
import process from "process";
import Model from "./model/mainModel.js";
import Routers from "./routes/routes.js";
import utilities from "./utilities.js";
import path from "path";
// console.log(dotenv);
// config();

// dotenv.config();
const app = express();

// const router = express.Router()
// console.log(utilities.PUBLIC_FOLDER_REL)
app.use((req, res, next)=>{
    console.log("Content-Legnth", req.get("Content-Length")); next();
})
app.use(utilities.PUBLIC_FOLDER_REL, Routers.staticRouter);
app.use(express.json({limit:100000}));
app.use("/home", Routers.homeRouter);
app.use("/sites", Routers.sitesRouter);
app.use("/clients", Routers.clientsRouter);
app.use("/start-now", Routers.startNowRouter);







const PORT = process.env.PORT;
const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


