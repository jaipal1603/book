import mongoose from "mongoose";
import User from "./user.js";

const schema = mongoose.Schema

const bookSchema = new schema({
    title: {
        type: String,
        required: true
    },
    summary: String,
    author: {
        type: schema.Types.ObjectId,
        ref: User,
        required: true
    }
})

const Book = mongoose.model("Book", bookSchema)

export default Book;