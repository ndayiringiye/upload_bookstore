import express from "express";
import dotenv from "dotenv";
dotenv.config()

const app = express();
app.use(express.json());
app.use("uploads", express.static("uploads"));

app.get("/", (req, res)=>{
    res.send("you're rich");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
});