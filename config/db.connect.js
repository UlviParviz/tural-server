import mongoose from "mongoose";

export const connectDatabase = () => {
  const DB_URL = 'mongodb+srv://turalkarim:turalkarim@nosql.kowtrwr.mongodb.net/';

  mongoose.connect(DB_URL).then((con) => {
    console.log(
      `MongoDB Database connected with HOST: ${con?.connection?.host}`
    );
  });
};