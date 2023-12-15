import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());




app.use("/api/users",userRoutes);
app.use("/api/auth", authRoutes);

// const CONNECTION_URL = 'mongodb+srv://Nidhi:544670@cluster0.35d4a4h.mongodb.net/?retryWrites=true&w=majority'
 
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://MahiraSharmaLogin:Mahira@cluster0.e0e8joy.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify',false);




