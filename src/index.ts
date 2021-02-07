import express from "express";
import path from "path";
import dotenv from "dotenv";
import "./infra";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `Server started at http://localhost:${ port }` );
});
