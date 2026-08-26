import { create, deleteBook, list, read, update } from "../service/book.service.js"


export const createBook = async (req, res, next) => {
    try {
        const dataObj = { ...req.body, author: req.userId }
        const book = await create(dataObj)
        return res.status(200).json({
            message: "book created successfully",
            data: book,
            status: true
        })
    } catch (error) {
        next(error)
    }
}

export const updateBook = async (req, res, next) => {
    try {
        const dataObj = { ...req.body, author: req.userId }

        const book = await update(dataObj)
        return res.status(200).json({
            message: "book updated successfully",
            data: book,
            status: true
        })
    } catch (error) {
        next(error)
    }
}
export const readBook = async (req, res, next) => {
    try {
        const book = await read(req.params.id)
        return res.status(200).json({
            message: "book found",
            data: book,
            status: true
        })
    } catch (error) {
        next(error)
    }
}
export const listBook = async (req, res, next) => {
    try {
        const book = await list()
        return res.status(200).json({
            message: "books found ",
            data: book,
            status: true
        })
    } catch (error) {
        next(error)
    }
}
export const deleteBooks = async (req, res, next) => {
    try {
        const book = await deleteBook(req.params.id)
        return res.status(200).json({
            message: "book deleted successfully",
            data: book,
            status: true
        })
    } catch (error) {
        next(error)
    }
}