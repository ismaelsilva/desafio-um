import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swagerFile from './swagger.json';
import { router } from './routes';

import "./database";
import "./shared/container";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagerFile))

app.use(router);
app.listen(3333, () => console.log("Server is running!"));