const userService = require('../Services/user')

module.exports = {






    async find(req, res, next) {


        try {
            const result = await userService.find()



            res.send(result)
            
        } catch (error) {

            console.log("error",error)
            res.status(500).send("internal Sever Error")
            
        }
    
    },




    async create(req, res, next) {
        if (req.body) {
            if (req.body.name && req.body.Email) {
                const result = await userService.create(req.body)
                res.send(result)
            } else {
                res.status(400).send("title is error")
            }
        }
    }
}