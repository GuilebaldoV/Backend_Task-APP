import mongoose from 'mongoose'

export const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://Guilebaldo:6z8vbZyZXdackHeQ@cluster0.tj8gclp.mongodb.net/?retryWrites=true&w=majority")
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}
