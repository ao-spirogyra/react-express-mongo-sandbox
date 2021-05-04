import express from 'express'
import mongoose from 'mongoose'
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


app.get('/', (_req, res) => {
  const data = { message: 'Hello' }
  res.send(data)
})

app.listen(port, host, () => {
  console.log(`server listening on ${host}:${port}`)
})