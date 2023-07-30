import User from "../models/user.models.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { createToken } from "../libs/jwt.js"
import { SECRET_TOKEN } from "../config.js"

export const register=async (req,res)=>{
    
    try {
        const {email,password,username}=req.body
        // console.log(req.)
        // Error duplicacion
        const userFound= await User.findOne({email})
        if(userFound) return res.status(400).json(["The email is alredy in use"])
        
        

        const passwordHash=await bcryptjs.hash(password,10)
        const newUser=new User({
            username,
            email,
            password:passwordHash
        })
        

        const userSaved=await newUser.save()
        // creacion del token
        const token=await createToken({id:userSaved._id});
        console.log("TOKEN",token)
        // res.cookie("token",token)
        res.cookie("token", token, {
            sameSite: "None",
            secure: true,
            // otras opciones si es necesario
          });
        // devolver estos datos para el frontend
        
        res.json({
            id:userSaved._id,
            username:userSaved.username,
            email:userSaved.email
        })
        console.log("hey??")
} catch (error) {
    console.log("errooor",error)
    return res.status(400).json(error);
}

}
export const login=async (req,res)=>{

    try {
        const {email,password}=req.body;
        console.log(email,password)
        // buscar usuario
        const userFound=await User.findOne({email});
        console.log(userFound,"UserFound")
        if(!userFound) return res.status(400).json(["User not found"])
        const isMatch=await bcryptjs.compare(password, userFound.password)
        console.log(isMatch)
        if (!isMatch) return res.status(400).json(["Invalid credentials"])
        // creacion del token
        const token=await createToken({id:userFound._id});
        res.cookie("token",token)
        // devolver estos datos para el frontend
        
        res.json({
            id:userFound._id,
            username:userFound.username,
            email:userFound.email
        })
} catch (error) {
    console.log(error,"backError")
}

}

export const logout= (req,res)=>{
    // quitando la cookie
    res.cookie("token","",{expires:new Date(0)})
    res.sendStatus(200)

}

export const profile=async (req,res)=>{
    try {
        console.log("Hola?");
        
        const userFound = await User.findById(req.user.id);
        if (!userFound) {
          return res.status(400).json({ message: "User not found" });
        }
        
        // console.log(userFound);
        
        return res.json({
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
}

export const verifyToken=(req,res)=>{
    const {token}=req.cookies;
    console.log(req.cookies,"VERIFICANDO SI VIENE TOKEN")
   console.log("verificando token")
    
   if(!token) return res.status(401).json({message:"Unauthorized"})
    jwt.verify(token,SECRET_TOKEN,async(err,user)=>{
        if(err) return res.status(401).json({message:"Unauthorized"})
        
        const userFound=await User.findById(user.id);
        if(!userFound) return res.status(401).json({message:"Not found"})

        return res.json({
            id:userFound._id,
            usernarme:userFound.username,
            email:userFound.email
        })

    })
}