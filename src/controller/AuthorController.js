const {Author,Book} = require("../model/model.js");

const AuthorController = {
    addAuthor:async(req,res)=>{
        try {
            const author = await Author.insertMany(req.body);
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllAuthor:async(req,res)=>{
        try {
            const author = await Author.find().populate("books");
            res.status(200).json(author);
        } catch (error) {
            res.status(200).json(error);
        }
    },
    getAnAuthor:async(req,res)=>{
        try {
            const book = await Author.findById(req.params.id);
            res.status(200).json(book);
        } catch (error) {
            res.status(200).json(error);
        }
    },
    updateAnAuthor:async(req,res)=>{
        try {
            const result = await Author.updateOne({_id:req.params.id},{$set:req.body})
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteAnAuthor:async(req,res)=>{
        try {
            await Book.updateOne({"author._id":req.params.id},{$set:{author:null}})
            const result = await Author.deleteOne({_id:req.params.id});
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = AuthorController;