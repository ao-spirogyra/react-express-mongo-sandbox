import mongoose from "mongoose";

const shema = new mongoose.Schema({
  data: Buffer,
  contentType: String,
  comment: {
    type:String
  }
})

export const Image = mongoose.model('Image', shema)