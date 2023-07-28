import express from 'express'
import morgan from 'morgan'
import Authroutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import taskRoutes from './routes/task.routes.js'
import cors from 'cors'

const app=express()
// leer peticiones en consola
app.use(morgan("dev"))
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173', 'https://frontenttask-app-production.up.railway.app'],
    credentials:true
}))
// para que al principio haya "api"
app.use("/api",Authroutes)
app.use('/api',taskRoutes)


export default app;


