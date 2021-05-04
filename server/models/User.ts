import mongoose from "mongoose";

const shema = new mongoose.Schema({
  sub: {
    type: String,
    required: true
  },
  name: {
    type: String,
    unique: true,
  }
})

export const User = mongoose.model('User', shema)