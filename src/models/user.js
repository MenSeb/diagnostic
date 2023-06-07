import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide an email."],
    unique: [true, "Email already exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    unique: false,
  },
});

export default model("user", UserSchema);
