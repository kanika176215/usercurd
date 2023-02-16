const userService = require('../services/user')

module.exports = {

   //--------------------------------create----------------------------------post----------------------------------
    async create(req, res, next) {
        try {
            if (req.body) {
                if (req.body.name && req.body.Email  ) {
                    const result = await userService.create(req.body)
                    res.send(result)
                } else {
                    res.status(400).send("title body req")
                }
            } else {
                res.status(400).send("data is required")
            }
        } catch (error) {
            console.log("error", error)
            res.status(500).send("internal sever eror")
        }
    },


    //--------------------------------get(read)----------------------------------find------------------

    async find(req, res, next) {

try {
    const result= await userService.find()
    res.send(result)
} catch (error) {
    console.log("error",error)
    res.status(500).send("internal servr error")
}

},



//--------------------------------get1----------------------------------findOne--------------------------------------
async findOne(req, res, next){

    try{
        if(req.params && req.params.userId){
        const result= await userService. findOne(req.params.userId)
        res.send(result)
    } else {
        res.status(400).send("blog id is required")
    }
   
} catch(error){
    console.log("error",error)
    res.status(500).send("internal serve error")
}

},



//--------------------------------update----------------------------------put---------------------------
async update(req,res, next){
    try {
     if(req.params && req.params.userId){
        const result= await userService.update(req.params.userId, req.body)
        res.send(result)
     } else {
        res.status(400).send("blog id is required")
     }  
    } catch (error) {
        console.log("error". error)
        res.status(500).send("internal serve error")
    }
},




//--------------------------------delete----------------------------------
async delete(req, res, next){
try {
    if(req.params && req.params.userId){
        const result= await userService.delete(req.params.userId)
        res.send(result)
    }else {
        req.status(400).send("user id is required")
    }
} catch (error) {
    console.log("error",error)
    res.status(500).send("internal server error")
}
}

}
