import { Router } from 'express';
import { uploadImage, showAllImages } from '../controllers/imagesController';


const imageRouter = Router();


imageRouter.post('/', uploadImage);
imageRouter.get('/', showAllImages);
export {imageRouter}
