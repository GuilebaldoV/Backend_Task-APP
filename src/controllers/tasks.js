import Task from '../models/task.models.js'
export const getTasks=async(req,res)=>{
    console.log(req.user)
    // populate sirve para traer toda la info del usuario tambien
    const tasks= await Task.find({
        user:req.user.id
    }).populate('user')
    res.json(tasks)
}

export const CreateTask=async(req,res)=>{
    const {title,description,date}=req.body;
    console.log(req.body)
    console.log(req.user,"userrr")
    const newTask=new Task(
        {title,
        description,
        date,
        user:req.user.id,}
    )
    const savedTask=await  newTask.save()
    res.json(savedTask)
}

export const deleteTask=async(req,res)=>{
    console.log(req.params.id,"holaaa?")
    const task=await Task.findByIdAndDelete(req.params.id)
    if (!task) return res.status(404).json({"Message":"No task found"})
    res.sendStatus(202)
}

export const getTask=async(req,res)=>{
    const task=await Task.findById(req.params.id)
    if (!task) return res.status(404).json({"Message":"No task found"})
    res.json(task)

}

export const updateTask=async(req,res)=>{
    // el new en true es para que devuelva el dato nuevo no el viejo
    const task=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if (!task) return res.status(404).json({"Message":"No task found"})
    res.json(task)
}