
import express from "express";
import { createBook, deleteBooks, listBook, readBook, updateBook } from "../controller/book.js";
import { checkAuth } from "../middleware/jwt.js";

const router = express.Router()

router.post("/create", checkAuth, createBook);
router.post("/update", checkAuth, updateBook);
router.get("/list", listBook);
router.delete("/delete/:id", checkAuth, deleteBooks);
router.get("/read/:id", readBook)

export default router