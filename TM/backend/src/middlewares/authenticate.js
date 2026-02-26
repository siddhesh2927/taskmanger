const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken=(token)=>{
return jwt.verify(token, process.env.JWT_SECRET || "tushar")
}



const authenticate=async(req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(400).send({message:"token not found"})
    }
    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send({message:"token not found"})

    }
    const token=req.headers.authorization.trim().split(" ")[1]
    let decoded
   try {
       decoded=await verifyToken(token)
      if(decoded){
          req.id=decoded.user._id
          
        return next()
      }
      else{
          return res.status(400).send({message:"token not found"})
      }
   } 
   catch (error) {
       return res.status(400).send({message:"Invalid or expired token"})
   }
}
module.exports=authenticate