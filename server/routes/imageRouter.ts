import { Router } from 'express';
import { uploadImage, showAllImages, deleteImage, countImages, addComment } from '../controllers/imagesController';


const imageRouter = Router();


imageRouter.post('/', uploadImage);
imageRouter.post('/:id',addComment);
imageRouter.get('/', showAllImages);
imageRouter.delete('/:id', deleteImage)
imageRouter.get('/count', countImages);
export {imageRouter}
