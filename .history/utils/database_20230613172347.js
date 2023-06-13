import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is alredy connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedtopology: true,
        })
    }catch(error){
        console.log(error);
    }
}