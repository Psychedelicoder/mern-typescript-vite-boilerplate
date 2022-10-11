import { Request, Response} from "express";
import { UserModel } from "../models/UserModel";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    UserModel.find({}, (err, result) => {
        if (err) {
          res.json(err)
        } else {
          res.json(result)
        }
    }).clone();
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    const user = req.body
    const newUser = new UserModel(user)
    await newUser.save()
    res.json(newUser)
}