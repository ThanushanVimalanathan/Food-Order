import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://greatstack:03072000@cluster0.2mnqtip.mongodb.net/food-del').then(()=>console.log("DB connected"));
}