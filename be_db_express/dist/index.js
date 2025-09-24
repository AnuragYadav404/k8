import express from "express";
import dotenv from "dotenv";
dotenv.config();
//const PORT=3000;
const PORT = process.env.PORT;
const app = express();
app.get("/", (req, res) => {
    res.status(200).send({
        message: "Hello from express app with DB"
    });
});
app.listen(PORT, () => {
    console.log("The application is running on port ", PORT);
    console.log("The database HOST is: ", process.env.DATABASE_HOST);
});
//# sourceMappingURL=index.js.map