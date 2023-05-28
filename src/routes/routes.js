const book = require("./book.js");
const author = require("./author.js")

function routes(app){
    app.use("/api/book",book);
    app.use("/api/author",author)
}


module.exports =  routes