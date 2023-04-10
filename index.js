import dotenv from 'dotenv';  // ovie sekogas najgore 
dotenv.config();

import express from "express";
import cors from "cors";
import { connectToDb } from "./db/mongo-connection.js";
import router from './router.const.js'

const PORT = process.env.PORT || 3002;
const HOST = process.env.HOST || "localhost";

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)

app.listen(PORT, HOST, async (error) => {
    if (error) console.log('Error while using the app');
    await connectToDb();
    console.log(`Server running on http://${HOST}:${PORT}`)
})