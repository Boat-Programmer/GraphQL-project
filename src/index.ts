import express from 'express'
import mongoose from 'mongoose'
import { config as dotenv } from "dotenv";
import createServer from './createServer';



dotenv()
const { PORT, MONGO_URL } = process.env

const startServer = async () => {
    try {
        await mongoose.connect(
            `${MONGO_URL}`, {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: true
            }
        )

        const app = express()

        const server = createServer()

        
    }
}