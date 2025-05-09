import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
      maxLength: [50, "Your username can not exceed 50 characters"],
    },

    quantity: {
      type: Number,
      required: [true, "Please enter quantity"],
    },

    price: {
      type: String,
      required: [true, "Please enter price"],
      maxLength: [50, "Your username can not exceed 50 characters"],
    },

    author: {
      type: String,
      required: [true, "Please enter author"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
