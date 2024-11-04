import mongoose, { Connection } from "mongoose";
const URL = process.env.MONGODB_URI || 'mongodb://localhost/mongoDB1'
export const config: Connection = mongoose.createConnection(URL);
console.log("Connected")
