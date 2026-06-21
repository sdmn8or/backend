const securemiddleware = (req,res,next)=>{
    
    let password = 'ouyduityefuyf'
    let pass = req.headers.authorization
    
    if(pass === password){
        next()
    }else{
        res.send('you are not authorized (chor)')
    }

}

module.exports = securemiddleware