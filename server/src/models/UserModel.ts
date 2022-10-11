import { Schema, model } from "mongoose";

interface UserInterface {
  name: string;
  lastName: string;
}

const UserSchema = new Schema<UserInterface>({
  name: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: true
  }
})

export const UserModel = model<UserInterface>('User', UserSchema);
