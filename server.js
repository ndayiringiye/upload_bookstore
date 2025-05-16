import express from "express";
const app = express();

app.use(express.json());
app.use("uploads", express.static("uploads"));

app.get("/", (req, res)=>{
    res.send("you're rich");
});
app.listen(5000, ()=>{
    console.log("server is running on port 5000")
});