const userData = require('../data/user.json')

module.exports={


   //--------------------------------create----------------------------------post----------------------------------
     async create(data){
        let userId= userData[userData.length-1].id+1
        const muserData ={
        id: userId,
        name:data.name,
        Email:data.Email
      
      
        }
        userData.push(muserData)
        return muserData
     },


     //--------------------------------get----------------------------------find-------------------------------------
     async find(){
     const user =userData
     return user
     },


     //--------------------------------get1----------------------------------findOne--------------------------------------
     async findOne(userId){
      const user= userData.find((singleuser)=>{
         if(singleuser.id==userId){
            return singleuser
         }
      })
      return user
     },



     //--------------------------------update----------------------------------put---------------------------
async update(userId,data){
let updateuser={}
userData.forEach((singleuser)=>{
   if(singleuser.id== userId){
      singleuser.body=data.body
      singleuser.name=data.name
      singleuser.Email=data.Email
      updateuser=singleuser
   }
})
return updateuser
} ,



//--------------------------------delete----------------------------------
async delete(userId){
const userIndex= userData.findIndex((singleuser)=>{
   if(singleuser.id==userId){
      return singleuser
   }
})

userData.splice(userIndex, 1)
return "ok"
}

}