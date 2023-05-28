const model = require("../model/model.js")
const BookController = {
    addABook:async(req,res)=>{
        try {
            const book = new model.Book(req.body);
            await book.save();
            await model.Author.updateOne({_id:req.body.author},{$push:{books:book._id}})
            res.status(200).json(req.body)
        } catch (error) {
            res.status(500).json("Error "+error)
        }
    },
    getAllBook:async(req,res)=>{
        try {
            const books = await model.Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json("error")
        }
    },
    getABook:async(req,res)=>{
        try {
            const book  = await model.Book.findById(req.params.id);
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateABook:async(req,res)=>{
        try {
            const result = await model.Book.updateOne({_id:req.params.id},{$set:req.body});
            res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteABook:async(req,res)=>{
        try {
            const result = await model.Book.findByIdAndDelete(req.params.id);
            res.status(200).json(result)    
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = BookController