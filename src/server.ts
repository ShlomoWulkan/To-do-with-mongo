import exp from "express";
import env from "dotenv";

env.config();
const port = process.env.PORT || 1516;
const app = exp();
app.use(exp.json());

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});
