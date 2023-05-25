const model = require("../model/model.js")
const BookController = {
    addABook:async(req,res)=>{
        try {
            console.log(req.body);
            const book = new model.Book(req.body);
            await book.save()
            res.status(200).json(req.body)
        } catch (error) {
            res.status(500).json("Error "+error)
        }

    }
}

module.exports = BookController