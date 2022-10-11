import express, {Request, Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import { UserRouter } from "./routes/UserRouter";

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.use("/users", UserRouter);

mongoose.connect("mongodb://localhost:27017/users")

const PORT = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Users API is running...");
})

app.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
})