import express from 'express'
import cors from 'cors'
import 'dotenv/config'


// app config 
const app = express()
const port = process.env.PORT || 4000

// mioddlewares 
app.use(express.json())
app.use(cors())

// api routes 
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})
