import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://cassim:root@cluster0.bppfmhn.mongodb.net/shop?retryWrites=true",
    {}
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

export const db = mongoose.connection;
