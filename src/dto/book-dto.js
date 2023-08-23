class BookDTO {

    bookNo;
    bookName;
    bookPrice;
    sellYn;
    registDate;
    categoryCode;
    writerNo;

    constructor(data) {
        this.bookNo = data.bookNo;
        this.bookName = data.bookName;
    }
}