import express from "express";
import Dotenv from "dotenv";
import cors from "cors";
import connectionDB from './config/db.js'

import router from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";


connectionDB();


const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended:true}))

Dotenv.config();

const port = process.env.PORT || 8080;


// defining routes
app.use("/book", router);
app.use("/user", userRoute);

app.get('/user', (req, res)=>{
  res.find()
})

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
