const mongoose=require("mongoose")
require('dotenv').config()

const connect=()=>{
    return mongoose.connect(process.env.mongoDbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB Atlas connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err))
}

module.exports=connect