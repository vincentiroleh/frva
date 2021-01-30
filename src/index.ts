/**
 ** Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import {ruleRouter} from "./rules/rules.router";
import {errorHandler, notFoundHandler, payloadHandler} from "./middleware/error.middleware";


dotenv.config();


/**
 ** App Variables
 */

const PORT: string|number = process.env.PORT || 3000;

const app = express();

/**
 **  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(ruleRouter);

app.use(errorHandler);
app.use(payloadHandler);
app.use(notFoundHandler);

/**
 ** Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
