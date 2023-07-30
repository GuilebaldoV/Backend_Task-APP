import { SECRET_TOKEN } from "../config.js";
import jwt from 'jsonwebtoken'

export const authRequired=(req,res,next)=>{
    console.log("validation")
    // validando el token
    const {token}= req.cookies;
    console.log(req.cookies,"validateToken",req)
    if(!token) return res.status(401).json({message:"No token, authorization denied"})

    jwt.verify(token,SECRET_TOKEN,(err,user)=>{
        if(err) return res.status(403).json({message:"Invalid token"})
        // req guarda todo, para usarso en otro lados
        // en este caso estamos guardando el id
        req.user=user
        next()
    })
}