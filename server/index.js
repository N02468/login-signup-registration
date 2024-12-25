const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const app = express();
app.use(cors(
    {
        origin:["login-signup-registration.vercel.app"],
        method:["POST","GET"],
        credintials:true
    }
));
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/employee').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});
app.post("/login", (req, res) => {
    const {email,password}=req.body;
        EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})
app.post('/register', (req, res) => {
   EmployeeModel.create(req.body).then(employees =>res.json(employees)).catch(err=>res.json(err))
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
