import express from "express";
import mongoose from "mongoose";
import AuthRouter from "./routes/auth.js";
import BookRouter from "./routes/book.js";

const mongoUri = "mongodb://localhost:27017"

// mongoose.connect(mongoUri, {
//     dbName: "bookApp"
// })

mongoose.set("strictQuery", false)

const app = express();

app.use(express.json())
app.get("/",(req,res)=>{
	res.send("working");
})
app.use("/api/v1/auth", AuthRouter)
app.use("/api/v1/book", BookRouter)

app.use((error, req, res, next) => {
    console.log(error)
    return res.status(500).json({ message: error.message, data: null, status: false })
})


app.listen(3000, () => {
    console.log("server is running on port :3000")
})
