import express from "express";
import { configDotenv } from "dotenv";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import connect from "./config/db.js";
const app = express()
configDotenv();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', router);

app.listen(process.env.PORT, async() =>{
    console.log(`Server started on port ${process.env.PORT}`);
    console.log(`Link : http://localhost:${process.env.PORT}`);
    connect();
    console.log("MongoDB Connected");
    
    
})