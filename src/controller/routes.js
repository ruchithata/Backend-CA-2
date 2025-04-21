const { Router } = require("express");
const userModel = require("../model/userSchema");

const router = Router();

router.post('/signup', async(req,res) => {
    try{
        const {Username, Email, Password, DOB} = req.body;
        if(!Username){
            return res.status(400).json({message: "Username cannot be empty"});
        }
        if(!Email){
            return res.status(400).json({message: "Email cannot be empty"});
        }
        if(Password<8 && Password>16){
            return res.status(400).json({message: "Password length should be greater than 8 or less than or equal to 16"});
        }

        const newUser = await userModel.create({
            Username, Email, Password, DOB
        });
        
        console.log(newUser);
        res.status(201).json({message: "user created successfully", newUser});
    }
    catch(err){
        console.log("error in adding the user",err);
        res.status(500).json({message: "Internal Server Error", err});
    }
});

router.get('/users', async(req,res) => {
    try{
        const members = await userModel.find();
        if(!members){
            return res.status(404).json({message: "no users found"});
        }

        console.log(members);
        res.status(200).json({message: "all the users", members});
    }
    catch(err){
        console.log("error in getting the users");
        res.status(500).json({Message: "Internal Server Error", err});
    }
});

module.exports = router;