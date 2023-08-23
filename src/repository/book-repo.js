const BookQuery = require('../database/book-query');


exports.registBook = (connection, book) => {

    return new Promise((resolve, reject) => {

        connection.query(BookQuery.registBook(),
        [
            book.book_no,
            book.book_name,
            book.book_price,
            book.sell_yn,
            book.regist_date,
            book.category_code,
            book.writer_no
        ], 
        (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        })
    })
}

exports.modifyBook = (connection, book) => {

    return new Promise((resolve, reject) => {

        connection.query(BookQuery.modifyBook(),
        [], 
        (err, result) => {
            if(err) {
                reject(err);
            }

            resolve(result);
        })
    });
}