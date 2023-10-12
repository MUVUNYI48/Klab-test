import mongoose from 'mongoose';

const newsLetterChema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:String
});


export const newsLetter=mongoose.model('newsLetter',newsLetterChema)

