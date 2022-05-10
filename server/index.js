import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import memoryRouter from './routers/memoryRouter.js'

dotenv.config() // Dotenv çalışması için bu tanım gereklidir.

const app = express()
app.use(express.json({ limit: '20mb' })) //Bodyden gelen json verilerini ayrıştırır.

app.use('/memories', memoryRouter)

//DB Connected.
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: true,
    })
    .then(() => console.log('Veri Tabanı Bağlantısı Başarılı..'))
    .catch((err) => console.log(err))
})
