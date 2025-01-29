import express from "express";
import env from "dotenv";
env.config();
import cors from "cors";
import bodyParser from "body-parser";
import infoRoutes from "./routes";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", infoRoutes); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});