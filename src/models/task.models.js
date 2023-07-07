import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
    description:{
        type:String,
        required:true,
    },
    user:{
        // asi se referencia otro id
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true       
    }
},{
    timestamps:true
})
// esto es lo que crea la coleccion
export default mongoose.model("Tasks",TaskSchema)
