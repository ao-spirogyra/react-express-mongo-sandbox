import mongoose from "mongoose";

const shema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String
  }
})

export const User = mongoose.model('Image', shema)