require('node:dns').setServers(['1.1.1.1'],['8.8.8.8'])
const express= require('express')
const {registrationcontroller,allsuserscontroller,deleteusercontroller,updateusercontroller} = require('./controllers/registrationcontroller')
const securemiddleware = require('./middlewares/securemiddleware')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://barlin:Nitro_fix@cluster0.qresxqn.mongodb.net/todo?appname=Cluster0')
.then(()=>{
    console.log('connected to mongodb')
})

app.use(express.json())


app.post('/registration',registrationcontroller)
app.get('/allusers',allsuserscontroller)
app.delete('/user/:id',deleteusercontroller)
app.post('/update/:id',updateusercontroller)




app.listen(8000,()=>{
    console.log('server is running')
})

app.post('/login',(req,res)=>{
    const{email,password}=req.body

    if(!email){
        res.send('email is required')
    }

    if(!password){
        res.send('password is required')
    }
    res.send('login successful')
    console.log(email,password)
})