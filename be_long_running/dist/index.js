import express from "express";
import dotenv from "dotenv";
dotenv.config();
//const PORT=3000;
const PORT = process.env.PORT;
const app = express();
app.get("/", (req, res) => {
    const counter_val = 10000000000;
    for (let i = 0; i < counter_val; i++) {
    }
    res.status(200).send({
        message: "Hello from long running express app",
        counter_val
    });
});
app.listen(PORT, () => {
    console.log("The application is running on port ", PORT);
    console.log("The DATABASE HOST is: ", process.env.DATABASE_HOST);
});
//# sourceMappingURL=index.js.map