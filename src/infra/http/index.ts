import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "../routes";
import cors from 'cors';

dotenv.config();

const options: cors.CorsOptions = {
  allowedHeaders: ['Origin','X-Requested-With','Content-Type','Accept','X-Access-Token'],
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  //origin: process.env.API_URL,
  origin: "*",
};

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(options));
app.use(router);

const port = process.env.SERVER_PORT;

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `Server started at http://localhost:${ port }` );
});