import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import router from "../routes";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors);
app.use(router);

const port = process.env.SERVER_PORT;

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `Server started at http://localhost:${ port }` );
});