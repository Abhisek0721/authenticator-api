import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import properties from "./src/config/properties";
import connectDB from "./src/config/db";
import userRouter from "./src/api/routes/userRoutes";

const port:number = properties.PORT;
const serverUrl:string = properties.SERVER_URL;

// express config
const app:Express = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRouter);

dotenv.config();
connectDB(properties.MONGO_URI);

app.get("/", (req:Request, res:Response) => {
    return res.send(`<h1>Running on Port : ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Open in Browser : ${serverUrl}`);
});