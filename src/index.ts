import "reflect-metadata";
import {createConnection} from "typeorm";
import express, { json } from 'express';

import routes from './routes/intex.routes'


createConnection().then(async () => {
    const app = express();
    app.use(json())
    app.use(routes);
    const port = 5252;


    app.listen(port, err => {
        if (err) {
            return console.error(err);
        }
        return console.log(`server is listening on ${port}`);
    });

    ;


}).catch(error => console.log(error));
