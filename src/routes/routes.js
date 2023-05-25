const book = require("./book.js");

function routes(app){
    app.use("/v3/book",book)
}


module.exports =  routes