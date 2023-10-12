import mongoose from 'mongoose'

const newsLetterShema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: String

})

export const NewsLetter = mongoose.model('NewsLetter', newsLetterShema);

