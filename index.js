import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/db.connect.js";
import bookRoutes from "./routes/book.routes.js";

const app = express();

app.use(
  express.json({
    limit: "10mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

app.use(cors());
app.use("/api", bookRoutes);

connectDatabase();

const server = app.listen(8000, () => {
  console.log(`Server is running on PORT: 8000`);
});
