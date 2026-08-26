import mongoose, { Schema } from "mongoose";

const schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String
})

const User = mongoose.model("User", userSchema)

export default User;