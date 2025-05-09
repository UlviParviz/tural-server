import express from "express";
import { addBook, deleteBook, editBook, getAllBooks } from "../controllers/book.controller.js";


const router = express.Router();

router.post("/add", addBook);
router.get("/books", getAllBooks );
router.delete("/books/:id", deleteBook);
router.put("/books/:id", editBook);

export default router;
