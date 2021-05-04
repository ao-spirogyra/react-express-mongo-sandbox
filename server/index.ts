import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const mongooseConnectString = process.env.NODE_ENV === 'development' ? 'mongodb://db:27017' : '' 
mongoose.connect(mongooseConnectString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  dbName: 'react-express-mongo-sandbox'
})
const app = express()
const port = 3000
const host = '0.0.0.0'

app.use(bodyParser.json())
app.get('/api', (_req, res) => {
  res.status(201).json({ message: 'Hello' })
})

app.listen(port, host, () => {
  console.log(`server listening on ${host}:${port}`)
})