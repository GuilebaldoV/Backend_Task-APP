import Router from 'express'
import {authRequired} from '../middlewares/validateToken.js'
import { getTask,getTasks,CreateTask,deleteTask,updateTask } from '../controllers/tasks.js'
import { validateSchema } from '../middlewares/validatorMiddlware.js'
import { createTaskSchema } from '../schemas/task.schema.js'

const router= Router()
router.get("/tasks",authRequired,getTasks)

router.get("/tasks/:id",authRequired,getTask)

router.post("/tasks",authRequired,validateSchema(createTaskSchema),
CreateTask)

router.delete("/tasks/:id",authRequired,deleteTask)

router.put("/tasks/:id",authRequired,updateTask)

export default router;