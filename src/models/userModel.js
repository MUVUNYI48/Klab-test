import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, require: true, unique: true },
    fullNames: { type: String, require: true },
    password: { type: String, require: true },
    phoneNumber: String,
    location: String,
    role: { type: String, default: "user" }
})

export const User = mongoose.model('User', userSchema);