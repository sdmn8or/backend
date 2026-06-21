const User = require('../models/usermodel')

const registrationcontroller = async (req,res)=>{
    const {username,email,password}=req.body

    if(!username){
        res.send('username is required')
    }

    if(!email){
        res.send('email is required')
    }

    if(!password){
        res.send('password is required')
    }
    
    const existinguser= await User.findOne({email:email})
    console.log(existinguser)
    if(existinguser){
        return res.send('user already exists')
        }

    const user = new User({
        username:username,
        email:email,
        password:password
    })
    
    user.save()
    res.send(user)
}

const allsuserscontroller = async (req,res)=>{
    let data = await User.find({})
    res.send(data)
}

const deleteusercontroller = async (req,res)=>{
    const {id} = req.params

    await User.findByIdAndDelete(id)
    res.send('user deleted')
}

const updateusercontroller = async (req,res)=>{
    const {id} = req.params

    let data = await User.findByIdAndUpdate({_id:id},req.body)
    res.send('user updated')
}

module.exports = {registrationcontroller, allsuserscontroller, deleteusercontroller,updateusercontroller}