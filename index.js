import express from "express"
import fs from "fs"
import inesf from "./routes/bb.rotes.js";
import bilal from "./config/db.js"
import bhati from "./routes/category.routes.js"
import owais from "./routes/sub_category.routes.js"
import royal from "./routes/product.routes.js"
import reviewrating from "./routes/reviewrating.routes.js"
import { config } from 'dotenv';
// import bhati from "./routes/category.routes.js"
// app.use(bhati)
const app = express();
app.use(express.json())
app.use(inesf)

config();
app.use(reviewrating)
app.use(royal)
app.use(owais)
app.use(bhati)
bilal()


app.listen(process.env.PORT|| 3002, (req, rea) => {
    console.log("serva")
})

