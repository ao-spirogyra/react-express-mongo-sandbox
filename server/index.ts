import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'
import { userRouter } from './routes/userRouter'
import { imageRouter } from './routes/imageRouter'
import multer from 'multer'

const mongooseConnectString = process.env.NODE_ENV === 'development' ? 'mongodb://db:27017' : process.env.MONGOOSE_CONNECT_STRING!
mongoose.connect(mongooseConnectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  dbName: 'react-express-mongo-sandbox'
})
const app = express()
const port = Number(process.env.PORT) || 3000
const host = '0.0.0.0'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer({ dest: 'uploads/' })

//api
app.use('/api/users', userRouter);
app.use('/api/images', upload.single('image'), imageRouter);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('/', function(_req, res) {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
  });
}

app.listen(port, host, () => {
  console.log(`server listening on ${host}:${port}`)
})