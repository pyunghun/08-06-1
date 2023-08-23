const BookService = require('../services/book-service');


exports.registBook = async (req, res) => {

     const result = await BookService.registBook(req.body);

     res.send(result);
}

exports.modifyBook = async (req, res) => {

     const result = await BookService.modifyBook(req.body);

     res.send(result);
}