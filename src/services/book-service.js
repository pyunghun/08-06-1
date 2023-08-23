const getConnection = require('../database/connection');
const BookRepository = require('../repository/book-repo');

exports.registBook = (book) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        connection.beginTransaction();

        try{
            
            const result = await BookRepository.registBook(connection, book);

            connection.commit();
            
            resolve(result);
        } catch(err) {

            connection.rollback();

            reject(err);
        } finally {
            connection.end();
        }
    })
}

exports.modifyBook = (book) => {

    return new Promise(async (resolve, reject) => {

        const connection = getConnection();

        connection.beginTransaction();

        try{
            const result = await BookRepository.modifyBook(connection, book);

            connection.commit();

            resolve(result);
        } catch(err) {

            connection.rollback();

            reject(err);
        } finally {
            connection.end();
        }

    })
}
