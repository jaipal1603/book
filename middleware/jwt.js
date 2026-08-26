import jwt from "jsonwebtoken";
import User from "../models/user.js";


export const checkAuth = async (req, res, next) => {
    try {
        const header = req.get("Authorization");
        const token = header.split(" ")[1]

        if (!token) {
            throw new Error("Token not found")
        }

        const decodeToken = jwt.verify(token, "this is the secret key")
        if (!decodeToken) {
            throw new Error("Invalid token")
        }

        const user = await User.findOne({ _id: decodeToken._id })
        if (!user) {
            throw new Error("no user found")
        }
        req.userId = user._id
        next();
    } catch (error) {
        next(error)
    }
}