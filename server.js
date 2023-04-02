import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "Welcome mongo migrate"
    })
});

app.listen(port, () => {
    console.log('Server running on port 3000: http://localhost:3000');
})