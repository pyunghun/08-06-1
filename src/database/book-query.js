exports.registBook = () => {
    
    return `insert
        into animal_book
        (book_no, book_name, book_price, sell_yn, regist_date, category_code, writer_no)
        values
        (?, ?, ?, ?, ?, ? , ?)
    `;
}