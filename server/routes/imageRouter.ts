import { Router } from 'express';
import { uploadImage, showAllImages, deleteImage, countImages } from '../controllers/imagesController';


const imageRouter = Router();


imageRouter.post('/', uploadImage);
imageRouter.get('/', showAllImages);
imageRouter.delete('/:id', deleteImage)
imageRouter.get('/count', countImages);
export {imageRouter}
