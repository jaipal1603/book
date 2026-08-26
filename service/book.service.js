import Book from "../models/book.js";


export const create = async ({ title, summary, author }) => {
    try {
        const bookExist = await Book.findOne({ author, title })
        if (bookExist) {
            throw new Error("book already exists")
        }
        const book = await Book.create({
            author,
            summary,
            title
        })
        return book
    } catch (error) {
        throw new Error(error)
    }
}

export const update = async ({ id, title, summary, author }) => {
    try {
        const book = await Book.findOne({ _id: id })
        if (!book) {
            throw new Error("book not exists")
        }
        await Book.updateOne({ _id: book._id }, {
            author,
            summary,
            title
        })
        return book
    } catch (error) {
        throw new Error(error)
    }
}

export const list = async () => {
    try {
        const book = await Book.find()
        return book
    } catch (error) {
        throw new Error("something went wrong")
    }
}

export const read = async (id) => {
    try {
        const book = await Book.findOne({ _id: id })
        return book
    } catch (error) {
        throw new Error("something went wrong")
    }
}

export const deleteBook = async (id) => {
    try {
        const book = await Book.findOneAndDelete({ _id: id })
        return book
    } catch (error) {
        throw new Error("something went wrong")
    }
}