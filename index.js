const express = require('express');
const { default: mongoose } = require('mongoose');
const Usermodle = require('./src/model/user.model');
const cors=require("cors")
require("dotenv").config()

const app = express();

 app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get( '/' ,(req , res) => res.send('hello Rajkumar')) ;


app.post("/register" ,async (req,res)=>{

    const { first_name ,last_name, email , password }=req.body;
    try {
            const user=new Usermodle({first_name ,last_name, email , password});
            await user.save()
            console.log(user);
            return res.status(201).send("Sign Up successfully")
    }
     catch (error) {
        return res.status(401).send("invaild Sign up Credentials")
    }

})

app.post("/login" , async (req ,res)=>{
        const { email , password}=req.body;
      const user= await Usermodle.findOne({email , password})
      if(user)
      {
        return res.status(200).send({message:"User Login successfull"})
      }
      else{
          return res.send("User not found")
      }
})

mongoose.connect(process.env.DB_URL).then(()=>{
    app.listen(8080 , ()=> {console.log('server is running on port 8080')});
})