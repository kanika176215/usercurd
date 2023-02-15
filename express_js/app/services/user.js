const userData = require('../data/user.json')

module.exports={


    async create(data) {


        

        
        let userId =userData[userData.length -1].id +1
        const muserData ={
            id : userId,
            name:data.name,
            Email:data.Email,
           
        }
        userData.push(muserData)
        return muserData
    },


    async find() {

        //fetch Data from database

        const user =userData
        return user


    
    },



}