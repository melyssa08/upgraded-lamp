import express from "express";
import cors from "cors";

const app = express();

app.use(express.json())

app.use(cors({
        origin:"*"
}))


app.use('/', (req, res) => {
    res.json("Ola mundo")
})

app.listen(3003, () => {
    console.log("http://localhost:3003")
})