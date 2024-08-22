import { config } from "./Config/congif";
import express from "express"
import { TItem } from "./Types/ItemType";
import { insertProducts } from "./Insertion/Insertion";
import { router } from "./Routes/Routes";

const app = express()
app.use(express.json())
app.use('/',router)
console.log("App using router");

