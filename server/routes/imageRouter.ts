import { Router } from 'express';
import { uploadImage, showAllImages, deleteImage } from '../controllers/imagesController';


const imageRouter = Router();


imageRouter.post('/', uploadImage);
imageRouter.get('/', showAllImages);
imageRouter.delete('/:id', deleteImage)
export {imageRouter}
