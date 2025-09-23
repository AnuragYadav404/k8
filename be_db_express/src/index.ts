import express from "express";
const PORT=3000;

const app = express();

app.get("/", (req, res) => {
    res.status(200).send({
        message:"Hello from express app with DB"
    })
})

app.listen(PORT, () => {
    console.log("The application is running on port ", PORT)
})