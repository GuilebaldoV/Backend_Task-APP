import {Router} from 'express'
import { login,register,logout,profile} from "../controllers/auth.js"
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validatorMiddlware.js'
import { registerSchema,loginSchema } from '../schemas/auth.schema.js'
const router= Router()
// validando, que chingon

router.post('/register',validateSchema(registerSchema),register)
router.post('/login',validateSchema(loginSchema),login)
router.post('/logout',logout)
router.get("/profile",authRequired,profile)

export default router;