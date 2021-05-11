import { Image } from '../models/Image'
import path from 'path'
import fs from 'fs'

export const uploadImage = (req,res) => {
  console.log(req.file)
  const newImage = {
    data: fs.readFileSync(path.join(__dirname + '../../../uploads/' + req.file.filename)),
    contentType: req.file.mimetype
  }
  const image = new Image(newImage)
  image.save(function (err, image) {
    if (err) {
      return res.json({ error: err });
    }
    return res.json({ image: image });
  });
}

export const showAllImages = async (_req, res) => {
  const images = await Image.find()
  return res.json(images)
}

export const deleteImage = async (req, res) => {
  const image = await Image.findOne({_id: req.params.id})
  image?.deleteOne();
  return res.json({message: 'deleted sucessfully'})
}

export const countImages =  async (_req, res) => {
  const images = await Image.find();
  const count = images.length
  return res.json({count: count})
}