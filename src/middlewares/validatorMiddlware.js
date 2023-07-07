export const validateSchema=(schema)=>(req,res,next)=>{
    // esto es lo que hace la validacion
    console.log("Validando")
    console.log(req.body)
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        // devolvemos todos los errores en un objeti
        return res.status(400).json(error.errors.map(err=>err.message))
    }
}