const mongoose= require("mongoose");
mongoose.set('strictQuery',false)


main().catch(err=> console.log(err)); //promises

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/blog');
}