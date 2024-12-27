import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://shubhverma2003:12345Bolo&@cluster0.vfvn1.mongodb.net/Food-Delivery-App"
    )
    .then(() => console.log("DB Connected"));
};
