const { default: mongoose } = require("mongoose");


async function connectToDb(){
    try{
        await mongoose.connect("mongodb://localhost:27017/quora",{
            family: 4,
        }) 
        console.log("db connected!!!");
    }catch(e){
        console.log(e);
    }

}


module.exports={connectToDb}