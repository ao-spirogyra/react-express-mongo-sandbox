import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import path from 'path'

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
app.get('/api', (_req, res) => {
  res.status(201).json({ message: 'Hello' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('/', function(_req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, host, () => {
  console.log(`server listening on ${host}:${port}`)
})