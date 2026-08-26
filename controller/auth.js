import jwt from "jsonwebtoken"
import User from "../models/user.js"
import bcrypt from "bcrypt"




export const signup = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (user) {
            throw new Error("User already exists");
        }
        const newUser = await User.create({
            username,
            password: await bcrypt.hash(password, 10) //salt value for hashing
        })

        return res.status(201).json({
            message: "User Signed Up",
            data: newUser,
            status: true
        })
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            throw new Error("no User found")
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            throw new Error("incorrect password")
        }
        const token = jwt.sign({ _id: user._id }, "this is the secret key", {
            expiresIn: "15m"
        })

        return res.status(200).json({
            message: "user logged in",
            data: token,
            status: true
        })

    } catch (error) {
        next(error)
    }
}