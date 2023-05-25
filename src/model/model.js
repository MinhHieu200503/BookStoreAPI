const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
    },
    publishDate:{
        type:String
    },
    genres:{
        type:[],
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"authorName"
    }
}) 

const AuthorSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    year:{
        type:Number,

    },
    books:[{
        typeof:mongoose.Schema.Types.ObjectId,
        ref:BookSchema
    }]
})
const Book = mongoose.model("bookName",BookSchema)
const Author = mongoose.model("authorName",AuthorSchema)
module.exports = {Book,Author}