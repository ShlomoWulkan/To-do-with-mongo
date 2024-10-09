import exp, { Express } from "express";
import { dbConnection } from "./config/dbConnection";
import env from "dotenv";

env.config();
const port: number = parseInt(process.env.PORT || '1516');
const app: Express = exp();
dbConnection();
app.use(exp.json());

app.listen(port, (): void => {
    console.log(`server is up and running on port ${port}`);
});
